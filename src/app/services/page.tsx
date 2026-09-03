"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import CaseStudySection from "@/components/CaseStudySection";
import VideoHero from "@/components/sections/VideoHero";
import Pill from "@/components/Pill";
import CaseStudyCard from "@/components/CaseStudyCard";
import { reveal, zoomImage } from "@/lib/styles";

const heroTags = ["Strategy", "Value proposition", "Prototype", "Campaign", "Website", "App", "Brand"];

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type Programme = {
  label: string;
  tagline: string;
  bestFor: string[];
  duration: string;
  paragraphs: string[];
  engagementImage: string;
  caseStudies: CaseStudy[];
};

const programmes: Programme[] = [
  {
    label: "Programme 01 – Understand & Align",
    tagline: "Build the evidence to know what to focus on next.",
    bestFor: ["Strategy", "Vision", "Value proposition"],
    duration: "2-6 weeks",
    paragraphs: [
      "Before committing to a direction, you need to know who your supporters actually are, what problem you're really solving, and what options there are for solving it.",
      "This stage builds that evidence base through interviews and research, then synthesises it into a clear, shared vision and a prioritised set of opportunities your organisation can genuinely get behind.",
    ],
    engagementImage: "/images/services/programme-01-engagement.png",
    caseStudies: [
      {
        title: "High Impact Athletes",
        description: "Understanding how to talk to fundraisers.",
        image: "/images/race-for-impact/hero-banner.jpg",
        href: "/projects/race-for-impact",
      },
      {
        title: "Gaming For Good",
        description: "Understanding a completely new fundraising audience.",
        image: "/images/gaming-for-good-case-study/hero-banner.png",
        href: "/projects/gaming-for-good",
      },
    ],
  },
  {
    label: "Programme 02 – De-risk and plan",
    tagline: "Prove it works, before you spend big.",
    bestFor: ["Prototype", "Roadmap"],
    duration: "4-10 weeks",
    paragraphs: [
      "Before committing real budget, you need to know an idea actually works — not assume it does.",
      "This stage moves you from an idea to a validated concept by testing it with real supporters. Then it translates that concept into a roadmap: a vision for where it could go, and an honest plan for what can actually be built.",
    ],
    engagementImage: "/images/services/programme-02-engagement.png",
    caseStudies: [
      {
        title: "Pave",
        description: "Testing a harm-reduction concept with real teenagers.",
        image: "/images/pave-case-study/hero-banner.jpg",
        href: "/projects/pave",
      },
      {
        title: "Bankwest",
        description: "Prototyping four opportunities before committing to build.",
        image: "/images/bankwest-case-study/hero-banner.jpg",
        href: "/projects/bankwest",
      },
    ],
  },
  {
    label: "Programme 03 – Build & Launch",
    tagline: "Bring it to life, with confidence.",
    bestFor: ["Campaign", "Website", "App", "Feature", "Brand"],
    duration: "1-6 months",
    paragraphs: [
      "Every build is different, so this stage is scoped to what you actually need — a website, an app, a campaign, or a brand brought to life.",
      "What doesn't change is the standard: work grounded in what was tested and validated in the stages before it.",
    ],
    engagementImage: "/images/services/programme-03-engagement.png",
    caseStudies: [
      {
        title: "Bankwest",
        description: "A ground-up rebuild of bankwest.com.au.",
        image: "/images/bankwest-case-study/hero-banner.jpg",
        href: "/projects/bankwest",
      },
      {
        title: "Gaming For Good",
        description: "Launching a 24-hour streaming fundraiser.",
        image: "/images/gaming-for-good-case-study/hero-banner.png",
        href: "/projects/gaming-for-good",
      },
    ],
  },
];

const foundations = [
  {
    number: "01.",
    title: "Learn quickly",
    paragraphs: [
      "Planning feels productive but doesn't actually result in outcomes.",
      "I build quickly, and get it in front of the customer quickly so we can learn quickly.",
    ],
  },
  {
    number: "02.",
    title: "Build real evidence",
    paragraphs: [
      "The only way to build real evidence for a direction is to get real reactions to it.",
      "No hypothesising; I build real looking prototypes to get real reactions from customers.",
    ],
  },
  {
    number: "03.",
    title: "AI-enabled",
    paragraphs: [
      "AI is a powerful tool but the skill of design is in the thinking.",
      "I approach problems from first principles and only use AI as a validation tool, not a generation one.",
    ],
  },
];

function ToggleIcon({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""} ${className}`}
    >
      <path d="M12 5v14M5 12h14" stroke="#252122" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ProgrammeRow({ programme, first = false }: { programme: Programme; first?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${first ? "" : "border-t border-text-dark"} w-full`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="relative grid grid-cols-1 md:grid-cols-6 gap-s md:gap-m w-full text-left pt-m pb-m pr-xl transition-colors duration-300 hover:bg-grey"
      >
        <p className="text-style-label uppercase text-text-dark md:col-span-2">{programme.label}</p>

        <div className="flex flex-col gap-m max-w-col-3 md:col-span-4">
          <p className="text-style-subtitle text-text-dark">{programme.tagline}</p>
          <div className="flex flex-col gap-s">
            <p className="text-style-label uppercase text-text-dark">Best for:</p>
            <div className="flex flex-wrap gap-xs">
              {programme.bestFor.map((tag) => (
                <Pill key={tag} filled className="shrink-0 w-fit">
                  {tag}
                </Pill>
              ))}
            </div>
          </div>
        </div>
        <ToggleIcon open={open} className="absolute top-m right-0" />
      </button>

      <div className={`grid grid-cols-1 md:grid-cols-6 gap-s md:gap-m ${open ? "pb-section" : ""}`}>
        <div className="hidden md:block md:col-span-2" />
        <div
          className={`md:col-span-4 grid transition-all duration-500 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-xl">
            <div className="flex flex-col gap-s">
              <p className="text-style-label uppercase text-text-dark">Duration:</p>
              <Pill filled className="shrink-0 w-fit">{programme.duration}</Pill>
            </div>

            <div className="flex flex-col gap-m max-w-col-3 text-style-body text-text-dark">
              {programme.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-col gap-s w-full">
              <p className="text-style-label uppercase text-text-dark">Typical engagement looks like:</p>
              <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
                <div className="relative w-full aspect-[1684/324]">
                  <Image src={programme.engagementImage} alt={`${programme.label} timeline`} fill unoptimized />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-s w-full">
              <p className="text-style-label uppercase text-text-dark">Case studies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-m w-full">
                {programme.caseStudies.map((cs) => (
                  <CaseStudyCard
                    key={cs.title}
                    title={cs.title}
                    description={cs.description}
                    image={cs.image}
                    href={cs.href}
                    minWidth0
                    hoverScope="group"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <VideoHero src="/videos/services-hero.mp4">
        <div className="px-s md:px-l pt-section pb-xl flex flex-col items-center">
          <div className="max-w-col-4 w-full flex flex-col gap-m items-center text-center">
            <h1 className="text-style-h1 text-text-dark">Take the guesswork out.</h1>
            <p className="text-style-subtitle text-text-dark-secondary">Build evidence for whatever you do next.</p>
          </div>

          <div className="flex flex-wrap gap-xs justify-center mt-m">
            {heroTags.map((tag) => (
              <Pill key={tag} className="shrink-0 w-fit">{tag}</Pill>
            ))}
          </div>
        </div>
      </VideoHero>

      {/* Programmes */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l flex flex-col">
        {programmes.map((programme, i) => (
          <ProgrammeRow key={programme.label} programme={programme} first={i === 0} />
        ))}
      </section>

      {/* Approach */}
      <section className="w-full bg-white border-t border-text-dark min-h-screen px-s md:px-l pt-m pb-section flex flex-col">
        <div className="flex-1 flex flex-col">
          <CaseStudySection label="Approach" justify="start">
            <p className="text-style-subtitle text-text-dark max-w-col-3">Three foundations to the process:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-m w-full">
              {foundations.map((f) => (
                <div
                  key={f.number}
                  className="bg-background border border-text-dark p-m flex flex-col justify-between gap-xl min-h-[387px]"
                >
                  <div className="flex flex-col gap-s">
                    <p className="text-style-subtitle text-text-dark">{f.title}</p>
                    <div className="flex flex-col gap-m text-style-body text-text-dark-secondary">
                      {f.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-style-h1 text-text-dark">{f.number}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>
        </div>
      </section>

      <Footer />
    </>
  );
}
