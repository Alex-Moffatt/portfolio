export type Project = {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  paragraphs: string[];
  heroImage: string;
  images: string[];
  cardImage: string;
  size: "large" | "small";
};

export const projects: Project[] = [
  {
    slug: "bankwest",
    title: "Bankwest website",
    client: "Launching a new bankweu",
    tags: ["Web design", "UX", "Prototyping"],
    paragraphs: [
      "A redesign of StartingBlocks.gov.au, Australia's free government resource for families navigating early childhood education. The site helps parents find and compare services, calculate childcare subsidies, and understand the National Quality Standard.",
      "The brief was clear: the existing landscape was fragmented and outdated, leaving families frustrated at a critical decision point. Over 22 weeks, we rebuilt the experience around simplicity with intuitive search, straightforward comparison tools, and plain-language guidance through an otherwise complex system.",
      "Research drove every decision. 15+ hours of user testing with a deliberately inclusive sample: metro and regional families, ATSI, EAL/D, and children with diverse needs. The results spoke for themselves. What once took families 12 hours to research took one.",
    ],
    heroImage: "https://placehold.co/1600x1000",
    cardImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=1000&fit=crop",
    size: "large",
    images: [
      "https://placehold.co/1600x1000",
      "https://placehold.co/1600x1000",
      "https://placehold.co/1600x1000",
    ],
  },
];
