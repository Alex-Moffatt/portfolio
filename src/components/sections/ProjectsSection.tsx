"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard";
import SplitLayout from "../SplitLayout";

type ProjectsSectionProject = {
  title: string;
  tags: string[];
  image: string;
  slug: string;
  size: "large" | "small";
};

type ProjectsSectionProps = {
  projects: ProjectsSectionProject[];
  intro?: string;
};

export default function ProjectsSection({
  projects,
  intro,
}: ProjectsSectionProps) {
  type Project = ProjectsSectionProject;
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const adjust = () => {
      const target = window.innerWidth * 0.5;
      const style = getComputedStyle(el);
      // Measure text width at a reference size using canvas
      const refSize = 100;
      ctx.font = `${style.fontWeight} ${refSize}px ${style.fontFamily}`;
      const refWidth = ctx.measureText("Projects").width;
      // Scale proportionally to hit target width
      const size = Math.floor((target / refWidth) * refSize);

      el.style.fontSize = `${size}px`;
      document.documentElement.style.setProperty(
        "--section-heading-size",
        `${size}px`
      );
    };

    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, []);

  // Group consecutive small cards into pairs
  const rows: (Project | [Project, Project])[] = [];
  let i = 0;
  while (i < projects.length) {
    if (
      projects[i].size === "small" &&
      i + 1 < projects.length &&
      projects[i + 1].size === "small"
    ) {
      rows.push([projects[i], projects[i + 1]]);
      i += 2;
    } else {
      rows.push(projects[i]);
      i++;
    }
  }

  return (
    <section id="projects" className="w-full bg-background section-py">
      {/* Part 1 — Section header */}
      <div className="px-s md:px-l">
        <h2
          ref={headingRef}
          className="text-text-dark whitespace-nowrap"
          style={{ fontSize: 120, lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Projects
        </h2>
      </div>

      {intro && (
        <SplitLayout className="section-mt px-s md:px-l">
          <p className="text-style-body-lg text-text-dark">{intro}</p>
        </SplitLayout>
      )}

      {/* Part 2 — Project grid */}
      <div className="section-mt px-s md:px-l section-gap-y">
        {rows.map((row, idx) =>
          Array.isArray(row) ? (
            <div key={idx} className="flex flex-col md:flex-row gap-[var(--section-gap)] md:gap-l">
              <ProjectCard
                title={row[0].title}
                tags={row[0].tags}
                image={row[0].image}
                slug={row[0].slug}
                size="small"
              />
              <ProjectCard
                title={row[1].title}
                tags={row[1].tags}
                image={row[1].image}
                slug={row[1].slug}
                size="small"
              />
            </div>
          ) : (
            <ProjectCard
              key={idx}
              title={row.title}
              tags={row.tags}
              image={row.image}
              slug={row.slug}
              size={row.size}
            />
          )
        )}
      </div>
    </section>
  );
}
