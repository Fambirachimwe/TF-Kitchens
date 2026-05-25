export const SITE = {
  name: "TF Kitchen Design",
  tagline: "Luxury Interior Solutions Crafted With Precision",
  url: "https://tfkitchendesign.co.za",
  email: "info@tfkitchendesign.co.za",
} as const;

export const CONTACT = {
  address: "18 Belarus Street, Ext 7, Cosmo City, Randburg, 2188",
  phones: ["+27 65 552 9045", "+27 71 760 4562"],
  whatsapp: "+27655529045",
  whatsappDisplay: "+27 65 552 9045",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0!2d27.9!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzAwLjAiUyAyN8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sza!4v1",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export const WHATSAPP_MESSAGE =
  "Hello TF Kitchen Design, I would like to request a quotation for my interior project.";

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
