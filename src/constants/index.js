import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { dw1, dw2, influencer, lead, contentcreation, influencermarketing, socialmedia, customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];


export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: dw1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: dw2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: influencer,
    },
];

export const statistics = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
];

export const products = [
    {
        imgURL: lead,
        name: "Lead Generation",
        price: "",
    },
    {
        imgURL: socialmedia,
        name: "Social Media Marketing",
        price: "",
    },
    {
        imgURL: influencermarketing,
        name: "Influencer Marketing",
        price: "",
    },
    {
        imgURL: contentcreation,
        name: "Search Engine Optimization",
        price: "",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Consulation",
        subtext: "A free consultation call provides you with a personalized overview of how our digital marketing services can help grow your brand. "
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];



export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Lead Generation", link: "/" },
            { name: "Social Media Marketing", link: "/" },
            { name: "Influencer Marketing", link: "/" },
            { name: "SEO", link: "/" },
            { name: "Content Creation", link: "/" },
            { name: "Business Consulatation", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "zealotsan@gmail.com", link: "mailto:zealotsan@gmail.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];