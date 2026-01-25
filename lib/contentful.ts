import { createClient } from 'contentful';

// Contentful Configuration
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: SPACE_ID || 'placeholder_space_id',
    accessToken: ACCESS_TOKEN || 'placeholder_access_token',
});

// --- Helper Types for Contentful Responses ---

// You will need to create these Content Models in Contentful with these exact field IDs.

// 1. Content Model: "Event"
// Fields:
// - title (Text, Short)
// - description (Text, Long)
// - dateandtime (Date and time)
// - location (Location object - or just Text if you prefer simpler) -> Note: Hygraph used Location {latitude, longitude}. Contentful has a Location type too.
// - tag (Text, Short)
// - registrationLink (Text, Short, URL)
// - image (Media)

// 2. Content Model: "Resource"
// Fields:
// - title (Text, Short)
// - description (Text, Long)
// - tag (Text, Short)
// - link (Text, Short, URL)
// - linkText (Text, Short)
// - iconName (Text, Short) -> e.g. "Rocket", "Home"

// 3. Content Model: "GalleryImage"
// Fields:
// - caption (Text, Short)
// - image (Media)

export const getEvents = async () => {
    try {
        if (!SPACE_ID || !ACCESS_TOKEN) {
            console.warn("Contentful keys are missing in .env");
            return [];
        }

        const response = await client.getEntries({
            content_type: 'event', // You MUST set the Content Model ID to 'event' in Contentful
            order: ['fields.dateandtime'], // Sort by date
        });

        return response.items.map((item: any) => {
            const fields = item.fields;
            const dateObj = new Date(fields.dateandtime);
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

            // Handle location: Contentful Location field returns { lat, lon }. 
            // Or if you made it a text field, just use it directly.
            // Assuming for now simple text "UC San Diego" if specific location isn't text.
            let location = 'UC San Diego';
            if (fields.location && fields.location.lat) {
                location = 'UC San Diego'; // Or convert coords to address if needed
            } else if (typeof fields.location === 'string') {
                location = fields.location;
            }

            // Helper to extract plain text from Rich Text
            let description = '';
            if (typeof fields.description === 'string') {
                description = fields.description;
            } else if (fields.description?.nodeType === 'document') {
                // Simple extraction of text from paragraphs
                description = fields.description.content
                    .map((node: any) => node.content?.map((c: any) => c.value).join(''))
                    .join('\n');
            }

            return {
                title: fields.title,
                description: description,
                date: dateStr,
                time: timeStr,
                location: location,
                tag: fields.tag,
                // Handle the typo in Contentful model if present
                registrationLink: fields.registerationLink || fields.registrationLink,
                image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : '',
            };
        });
    } catch (error) {
        console.error("Failed to fetch events from Contentful:", error);
        return [];
    }
};

export const getResources = async () => {
    try {
        if (!SPACE_ID || !ACCESS_TOKEN) {
            return [];
        }

        const response = await client.getEntries({
            content_type: 'resource', // Set Content Model ID to 'resource'
        });

        return response.items.map((item: any) => ({
            title: item.fields.title,
            description: item.fields.description,
            tag: item.fields.tag,
            link: item.fields.link,
            linkText: item.fields.linkText,
            iconName: item.fields.iconName,
            isExternal: true, // Default
            footerText: ''
        }));
    } catch (error) {
        console.error("Failed to fetch resources from Contentful:", error);
        return [];
    }
};

export const getGalleryImages = async () => {
    try {
        if (!SPACE_ID || !ACCESS_TOKEN) {
            return [];
        }

        const response = await client.getEntries({
            content_type: 'galleryImage', // Set Content Model ID to 'galleryImage'
        });

        return response.items.map((item: any) => ({
            id: item.sys.id,
            caption: item.fields.caption || '',
            url: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : '',
        })).filter((item) => item.url !== '');
    } catch (error) {
        console.error("Failed to fetch gallery images from Contentful:", error);
        return [];
    }
};
