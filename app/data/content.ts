import { IMAGES } from "./images";

export const SERVICES = [
  {
    id: "kitchen",
    title: "Kitchen Design & Installation",
    description:
      "Custom-designed kitchens crafted for functionality, elegance, and everyday living.",
    image: IMAGES.kitchen,
    slug: "kitchen-design",
  },
  {
    id: "cupboards",
    title: "Built-In Cupboards",
    description:
      "Modern storage solutions designed to maximize space while maintaining a premium finish.",
    image: IMAGES.cupboards,
    slug: "built-in-cupboards",
  },
  {
    id: "bathroom",
    title: "Bathroom Vanities",
    description:
      "Stylish and durable vanity installations tailored to complement your bathroom design.",
    image: IMAGES.bathroom,
    slug: "bathroom-vanities",
  },
  {
    id: "bar",
    title: "Bar Areas",
    description:
      "Sophisticated entertainment spaces built with modern aesthetics and practical layouts.",
    image: IMAGES.bar,
    slug: "bar-areas",
  },
  {
    id: "tiling",
    title: "Tiling",
    description:
      "Professional wall and floor tiling solutions with clean finishes and modern styling.",
    image: IMAGES.tiling,
    slug: "tiling",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description:
      "Reliable plumbing services integrated seamlessly into your renovation or installation project.",
    image: IMAGES.plumbing,
    slug: "plumbing",
  },
  {
    id: "ceiling",
    title: "Ceiling Works",
    description:
      "Professional ceiling installations and finishes that complete your interior transformation.",
    image: IMAGES.ceiling,
    slug: "ceiling-works",
  },
] as const;

export const SERVICE_DETAILS = [
  {
    ...SERVICES[0],
    longDescription:
      "Transform your kitchen into a stylish and functional centerpiece with custom-designed layouts, premium finishes, and professional installations.",
    benefits: [
      "Custom layouts tailored to your space",
      "Premium cabinetry and finishes",
      "Integrated appliances and storage",
      "Professional installation team",
    ],
  },
  {
    ...SERVICES[1],
    longDescription:
      "Our custom-built cupboards maximize storage while maintaining a clean, modern, and elegant aesthetic.",
    benefits: [
      "Space-maximizing designs",
      "Premium hardware and finishes",
      "Bedroom, living room & office solutions",
      "Seamless built-in integration",
    ],
  },
  {
    ...SERVICES[2],
    longDescription:
      "Enhance your bathroom with modern vanity installations designed for both beauty and practicality.",
    benefits: [
      "Custom vanity designs",
      "Water-resistant premium materials",
      "Integrated storage solutions",
      "Coordinated tiling options",
    ],
  },
  {
    ...SERVICES[3],
    longDescription:
      "Create sophisticated entertainment spaces with custom-designed bar installations tailored to your lifestyle.",
    benefits: [
      "Entertainment-focused layouts",
      "Premium counter and storage",
      "Lighting and finish coordination",
      "Residential & commercial options",
    ],
  },
  {
    ...SERVICES[4],
    longDescription:
      "We provide precision tiling solutions for walls and floors using modern finishes and quality workmanship.",
    benefits: [
      "Wall and floor tiling",
      "Modern pattern options",
      "Waterproof bathroom tiling",
      "Clean, precise finishes",
    ],
  },
  {
    ...SERVICES[5],
    longDescription:
      "Reliable plumbing services integrated seamlessly into your renovation or interior installation project.",
    benefits: [
      "Kitchen and bathroom plumbing",
      "Fixture installation",
      "Leak repairs and upgrades",
      "Coordinated with renovations",
    ],
  },
  {
    ...SERVICES[6],
    longDescription:
      "Professional ceiling works including installations, repairs, and premium finishes for complete interior solutions.",
    benefits: [
      "Modern ceiling designs",
      "Repairs and replacements",
      "Integrated lighting prep",
      "Clean professional finishes",
    ],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Premium Workmanship",
    description:
      "We focus on quality finishes, precision installations, and attention to detail.",
    icon: "award" as const,
  },
  {
    title: "Modern Luxury Designs",
    description:
      "Every project is designed to combine elegance, practicality, and contemporary styling.",
    icon: "sparkles" as const,
  },
  {
    title: "Tailored Solutions",
    description:
      "We customize every project according to your needs, space, and budget.",
    icon: "ruler" as const,
  },
  {
    title: "Reliable Delivery",
    description:
      "Our process ensures transparency, communication, and efficient project completion.",
    icon: "clock" as const,
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Request a Quotation", description: "Reach out with your project details and requirements." },
  { step: 2, title: "Site Visit", description: "We assess your space, take measurements, and discuss your vision." },
  { step: 3, title: "Design", description: "Our team creates a custom solution tailored to your style and needs." },
  { step: 4, title: "Receive Quotation", description: "We provide a transparent and detailed quotation for approval." },
  { step: 5, title: "Deposit Payment", description: "Secure your project with a convenient deposit payment." },
  { step: 6, title: "Installation", description: "Our skilled team handles installation with professionalism." },
  { step: 7, title: "Project Handover", description: "Final inspection and handover once everything meets expectations." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "TF Kitchen Design completely transformed our kitchen space. The workmanship and attention to detail exceeded our expectations.",
    author: "Sarah M.",
  },
  {
    quote:
      "Professional, reliable, and highly skilled. The final result looked even better than we imagined.",
    author: "David & Amanda",
  },
  {
    quote:
      "Their team handled our cupboards and tiling beautifully. Excellent communication throughout the project.",
    author: "Michael T.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you offer free quotations?",
    answer:
      "Yes. We provide consultations and quotations based on your project requirements and site assessment.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Yes. We handle both residential and commercial interior installation projects.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Project timelines vary depending on the size and complexity of the work. We provide estimated timelines during the quotation stage.",
  },
  {
    question: "Can you customize designs?",
    answer:
      "Absolutely. Every project is tailored to your space, style preferences, and budget.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We primarily operate in Randburg and surrounding areas, but we can also discuss projects in other locations.",
  },
  {
    question: "Do you handle plumbing and tiling as part of installations?",
    answer:
      "Yes. We provide complete installation solutions including plumbing and tiling where required.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "You can request a quotation through our website contact form, WhatsApp, or by calling us directly.",
  },
] as const;

export const CORE_VALUES = [
  { title: "Quality", description: "We believe every detail matters." },
  { title: "Integrity", description: "We value transparency, honesty, and professionalism." },
  { title: "Creativity", description: "We create tailored interior solutions that reflect modern lifestyles." },
  { title: "Reliability", description: "We deliver projects with commitment and consistency." },
] as const;

export const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Client Focused" },
  { value: "7", label: "Core Services" },
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Kitchens",
  "Cupboards",
  "Bathrooms",
  "Bars",
  "Tiling",
  "Plumbing",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  image: string;
  description: string;
  location?: string;
}

export const PROJECTS: Project[] = [
  { id: "1", title: "Modern Open-Plan Kitchen", category: "Kitchens", image: IMAGES.kitchen, description: "Luxury kitchen with matte finishes and integrated storage.", location: "Randburg" },
  { id: "2", title: "Scandinavian Kitchen Suite", category: "Kitchens", image: IMAGES.hero, description: "Clean lines with warm wood accents and premium appliances.", location: "Sandton" },
  { id: "3", title: "Master Bedroom Cupboards", category: "Cupboards", image: IMAGES.cupboards, description: "Floor-to-ceiling built-in wardrobes with soft-close hardware.", location: "Fourways" },
  { id: "4", title: "Living Room Storage Wall", category: "Cupboards", image: IMAGES.aboutSecondary, description: "Custom media unit with concealed storage solutions.", location: "Roodepoort" },
  { id: "5", title: "Spa-Inspired Bathroom", category: "Bathrooms", image: IMAGES.bathroom, description: "Double vanity with stone countertop and modern fixtures.", location: "Randburg" },
  { id: "6", title: "Guest Ensuite Renovation", category: "Bathrooms", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", description: "Compact luxury ensuite with premium tiling.", location: "Midrand" },
  { id: "7", title: "Entertainment Bar Area", category: "Bars", image: IMAGES.bar, description: "Custom bar with wine storage and ambient lighting.", location: "Centurion" },
  { id: "8", title: "Bathroom Floor Tiling", category: "Tiling", image: IMAGES.tiling, description: "Large-format porcelain tiles with precision grouting.", location: "Randburg" },
  { id: "9", title: "Kitchen Plumbing Upgrade", category: "Plumbing", image: IMAGES.plumbing, description: "Full plumbing integration for kitchen renovation.", location: "Cosmo City" },
  { id: "10", title: "Contemporary Kitchen Island", category: "Kitchens", image: "https://images.unsplash.com/photo-1600489000022-c208b72935f5?w=800&q=80", description: "Statement island with quartz countertop.", location: "Johannesburg" },
];

export const TRUST_ITEMS = [
  "Residential Experts",
  "Commercial Projects",
  "Custom Designs",
  "Premium Finishes",
  "Randburg & Surrounds",
] as const;
