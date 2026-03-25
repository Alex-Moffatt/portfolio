import Link from "next/link";
import Image from "./Image";

type ProjectCardProps = {
  title: string;
  tags: string[];
  image: string;
  slug: string;
  size?: "large" | "small";
};

export default function ProjectCard({
  title,
  tags,
  image,
  slug,
  size = "large",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`block group ${size === "small" ? "flex-1 min-w-0" : "w-full"}`}
    >
      {/* Image with hover scale */}
      <div className="overflow-hidden">
        <div className="transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.02]">
          <Image src={image} alt={title} unoptimized />
        </div>
      </div>

      {/* Text content */}
      <div className="flex items-end justify-between mt-s gap-m">
        <h3 className="text-style-project text-text-dark">{title}</h3>
        <div className="flex items-end gap-s flex-shrink-0">
          {tags.map((tag, i) => (
            <span key={i} className="text-style-body-sm text-text-dark-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
