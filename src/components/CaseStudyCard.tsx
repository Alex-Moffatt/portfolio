import Image from "@/components/Image";

type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  minWidth0?: boolean;
  hoverScope?: "self" | "group";
};

export default function CaseStudyCard({
  title,
  description,
  image,
  href,
  minWidth0 = false,
  hoverScope = "self",
}: CaseStudyCardProps) {
  return (
    <a
      href={href}
      className={`flex flex-col gap-s items-start no-underline ${minWidth0 ? "min-w-0 " : ""}${
        hoverScope === "group" ? "group" : ""
      }`}
    >
      <div
        className={`border border-text-dark relative w-full aspect-[193/120] overflow-hidden grayscale transition-[filter] duration-500 ${
          hoverScope === "group" ? "group-hover:grayscale-0" : "hover:grayscale-0"
        }`}
      >
        <Image src={image} alt={title} fill unoptimized />
      </div>
      <p className="text-style-subtitle text-text-dark whitespace-nowrap">{title}</p>
      <p className="text-style-body text-text-dark-secondary">{description}</p>
    </a>
  );
}
