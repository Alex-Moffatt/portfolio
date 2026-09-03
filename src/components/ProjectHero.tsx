import Image from "@/components/Image";
import { ExternalLinkIcon, ProjectTypeIcon } from "@/components/icons";
import { reveal } from "@/lib/styles";

type ProjectStat =
  | { kind: "link"; label: string; value: string; href: string }
  | { kind: "plain"; label: string; value: string }
  | { kind: "icon"; label: string; value: string };

type ProjectHeroProps = {
  image: string;
  alt: string;
  headline: React.ReactNode;
  stats: ProjectStat[];
  columns?: 2 | 3;
};

export default function ProjectHero({ image, alt, headline, stats, columns = 2 }: ProjectHeroProps) {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col">
      <div className={`border border-text-dark relative w-full flex-1 ${reveal}`}>
        <Image src={image} alt={alt} fill unoptimized />
      </div>

      <div className="px-s md:px-l mt-xl mb-xl grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 md:col-span-4 flex flex-col gap-xl items-center">
          <p className="text-style-h2 text-text-dark text-center">{headline}</p>

          <div className={`grid grid-cols-1 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-m w-full`}>
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-grey pt-s flex flex-col items-center gap-xs text-center">
                <p className="text-style-label uppercase text-text-dark-secondary">{stat.label}</p>
                {stat.kind === "link" && (
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-xs no-underline hover:opacity-70 transition-opacity duration-200"
                  >
                    <p className="text-style-subtitle text-text-dark whitespace-nowrap">{stat.value}</p>
                    <ExternalLinkIcon />
                  </a>
                )}
                {stat.kind === "plain" && (
                  <p className="text-style-subtitle text-text-dark whitespace-nowrap">{stat.value}</p>
                )}
                {stat.kind === "icon" && (
                  <>
                    {/* TODO: link to the Services page once it exists */}
                    <div className="flex items-center gap-xs">
                      <ProjectTypeIcon />
                      <p className="text-style-subtitle text-text-dark whitespace-nowrap">{stat.value}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
