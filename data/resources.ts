import { Rocket, GraduationCap, FileCheck, Home, Briefcase } from 'lucide-react';

export const resources = [
    {
        iconName: 'Rocket',
        title: "New Student Quick Start",
        description: "A brief orientation overview for incoming students. Use this to get your bearings before diving into the details.",
        tag: "Orientation",
        linkText: "Open Quick Guide",
        footerText: "For detailed steps, see Handbook",
        link: "#", // Replace with PDF link from Hygraph
        isExternal: false
    },
    {
        iconName: 'GraduationCap',
        title: "UC San Diego Essentials",
        description: "High-level overview of enrollment, General Education (GE) requirements, placement exams, and health insurance.",
        tag: "Academics",
        linkText: "Visit UCSD.edu",
        link: "https://ucsd.edu",
        isExternal: true
    },
    {
        iconName: 'FileCheck',
        title: "Scholarships & Sponsorships",
        description: "Information regarding SACM, Safeer, and other sponsored programs. Understand the basics of your status.",
        tag: "Administrative",
        linkText: "Sponsorship Info",
        footerText: "Consult specific portal for docs",
        link: "https://safeer.moe.gov.sa/",
        isExternal: true
    },
    {
        iconName: 'Home',
        title: "Life in San Diego",
        description: "Explore popular housing areas, transportation options, and where to find the best Halal food in the city.",
        tag: "Lifestyle",
        linkText: "View Area Map",
        footerText: "Housing checklist in Handbook",
        link: "#", // Replace with PDF link
        isExternal: false
    },
    {
        iconName: 'Briefcase',
        title: "Professional Development",
        description: "Grow your career with SSA initiatives. Connect with alumni, attend workshops, and build your resume.",
        tag: "Career",
        linkText: "Visit LinkedIn",
        link: "https://linkedin.com",
        isExternal: true
    }
];