import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import CaseStudySection from "@/components/CaseStudySection";
import VideoHero from "@/components/sections/VideoHero";
import Pill from "@/components/Pill";

type ProjectPreview = {
  number: string;
  title: string;
  description: string;
  sector: string;
  image: string;
  href: string;
};

const projects: ProjectPreview[] = [
  {
    number: "01",
    title: "High Impact Athletes",
    description: "Testing how to create connection to causes.",
    sector: "Non-profit",
    image: "/images/race-for-impact/hero-banner.jpg",
    href: "/projects/race-for-impact",
  },
  {
    number: "02",
    title: "Bankwest",
    description: "Rebuilding a bank's website around what customers actually need.",
    sector: "Finance",
    image: "/images/bankwest-case-study/hero-banner.jpg",
    href: "/projects/bankwest",
  },
  {
    number: "03",
    title: "Pave",
    description: "Helping 16–24 year olds quit vaping, on their own terms.",
    sector: "Healthcare",
    image: "/images/pave-case-study/hero-banner.jpg",
    href: "/projects/pave",
  },
  {
    number: "04",
    title: "Gaming For Good",
    description: "Opening a new fundraising market: gaming streamers.",
    sector: "Gaming",
    image: "/images/gaming-for-good-case-study/hero-banner.png",
    href: "/projects/gaming-for-good",
  },
];

const sectors = ["Non-profit", "Finance", "Government", "Education", "Healthcare", "Gaming"];

const logos = [
  { src: "/images/general/logo-hia.png", alt: "High Impact Athletes" },
  { src: "/images/general/logo-commbank.png", alt: "Commonwealth Bank" },
  { src: "/images/general/logo-tafe.png", alt: "TAFE NSW" },
  { src: "/images/general/logo-unsw.png", alt: "UNSW" },
  { src: "/images/general/logo-bankwest.png", alt: "Bankwest" },
  { src: "/images/general/logo-redcross.png", alt: "British Red Cross" },
  { src: "/images/general/logo-cancer-institute-nsw.png", alt: "Cancer Institute NSW" },
  { src: "/images/general/logo-university-of-sydney.png", alt: "The University of Sydney" },
  { src: "/images/general/logo-nsw-dpi.png", alt: "NSW Department of Primary Industries" },
];

function ProjectPreviewCard({ project }: { project: ProjectPreview }) {
  return (
    <Link href={project.href} className="group flex flex-col gap-s items-start w-full">
      <p className="text-style-label uppercase text-text-dark">{project.number}</p>

      <div className="relative w-full aspect-square">
        <div className="absolute top-0 left-0 border border-text-dark overflow-hidden w-1/3 aspect-square transition-all duration-500 grayscale md:group-hover:w-full md:group-hover:grayscale-0">
          <Image src={project.image} alt={project.title} fill unoptimized />
        </div>
      </div>

      <div className="flex flex-col gap-s h-[160px] overflow-hidden opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
        <p className="text-style-subtitle text-text-dark whitespace-nowrap">{project.title}</p>
        <p className="text-style-body text-text-dark-secondary">{project.description}</p>
        <Pill filled className="w-fit">
          {project.sector}
        </Pill>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <VideoHero src="/videos/work-hero.mp4">
        <div className="px-s md:px-l pt-section pb-xl flex flex-col items-center">
          <div className="max-w-col-3 w-full flex flex-col gap-m items-center text-center">
            <h1 className="text-style-h1 text-text-dark">Impact-driven work.</h1>
            <p className="text-style-subtitle text-text-dark-secondary">
              Eight years of work spanning across a variety of sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-xs justify-center mt-m">
            {sectors.map((sector) => (
              <Pill key={sector}>{sector}</Pill>
            ))}
          </div>
        </div>
      </VideoHero>

      {/* Examples */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="Examples">
          <div className="flex flex-col gap-m max-w-col-3 text-style-subtitle text-text-dark">
            <p>
              Most of my work has been in the social sector, and the projects I care most about
              are the ones where impact is taken seriously — where an organisation isn&rsquo;t
              just doing good, but asking how much good, and for whom, and whether the money
              could do more somewhere else.
            </p>
            <p>
              That&rsquo;s effective giving: directing funds to the organisations that create the
              most impact per pound, based on independent evidence rather than instinct or
              familiarity.
            </p>
            <p>If you&rsquo;re working on something in that space, it&rsquo;s the work I most want to be doing.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-m gap-y-l items-start w-full">
            {projects.map((project) => (
              <ProjectPreviewCard key={project.number} project={project} />
            ))}
          </div>
        </CaseStudySection>
      </section>

      {/* Logos ticker */}
      <section className="gradient-mesh w-full border-t border-text-dark py-m overflow-hidden">
        <div className="flex w-max animate-[ticker_30s_linear_infinite] hover:[animation-play-state:paused] gap-m">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              aria-hidden={i >= logos.length}
              className="bg-white border border-text-dark h-[60px] px-m py-xs flex items-center justify-center shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
