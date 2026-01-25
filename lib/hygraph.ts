import { GraphQLClient, gql } from 'graphql-request';

// Hygraph Content API Endpoint
const HYGRAPH_ENDPOINT = 'https://us-west-2.cdn.hygraph.com/content/cmb8k2b6r003o07utbglfvbei/master';

const client = new GraphQLClient(HYGRAPH_ENDPOINT);

export const getEvents = async () => {
  const query = gql`
    query Events {
      events(first: 100, orderBy: dateandtime_ASC) {
        title
        description
        dateandtime
        location {
          latitude
          longitude
        }
        tag
        registrationLink
        image {
          url
        }
      }
    }
  `;

  try {
    const result = await client.request(query) as any;
    // Map Hygraph result structure to our app structure
    return result.events.map((e: any) => {
      const dateObj = new Date(e.dateandtime);
      const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // e.g. "Feb 22"
      const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // e.g. "6:00 PM"

      return {
        ...e,
        date: dateStr,
        time: timeStr,
        // Since location is coords, we default to "On Campus" or empty string if it's just an object
        location: e.location ? 'UC San Diego' : 'TBD',
        image: e.image?.url || '', // Extract URL from image object
      };
    });
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
};

export const getResources = async () => {
  const query = gql`
    query Resources {
      resources(first: 100) {
        title
        description
        tag
        link
        linkText
        iconName
      }
    }
  `;

  try {
    const result = await client.request(query) as any;
    return result.resources.map((r: any) => ({
      ...r,
      isExternal: true, // Default for CMS items
      footerText: '' // Field not in CMS yet, defaulting to empty
    }));
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return [];
  }
};

export const getGalleryImages = async () => {
  const query = gql`
    query Gallery {
      galleryImages(first: 100) {
        id
        caption
        image {
          url
        }
      }
    }
  `;

  try {
    const result = await client.request(query) as any;
    return result.galleryImages
      .map((item: any) => ({
        id: item.id,
        caption: item.caption || '',
        url: item.image?.url || '', // Handle null image
      }))
      .filter((item: any) => item.url !== ''); // Filter out items with no image
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
    return [];
  }
};