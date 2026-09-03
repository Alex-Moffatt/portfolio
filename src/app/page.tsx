import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyCard from "@/components/CaseStudyCard";
import ContactCTA from "@/components/ContactCTA";
import FloatingPillsHero from "@/components/sections/FloatingPillsHero";
import { zoomImage } from "@/lib/styles";

const projects = [
  {
    title: "High Impact Athletes",
    description: "Understanding how to talk to fundraisers.",
    image: "/images/race-for-impact/hero-banner.jpg",
    href: "/projects/race-for-impact",
  },
  {
    title: "Bankwest",
    description: "Rebuilding a bank's website around what customers actually need.",
    image: "/images/bankwest-case-study/hero-banner.jpg",
    href: "/projects/bankwest",
  },
  {
    title: "Pave",
    description: "Helping 16–24 year olds quit vaping, on their own terms.",
    image: "/images/pave-case-study/hero-banner.jpg",
    href: "/projects/pave",
  },
  {
    title: "Gaming For Good",
    description: "Opening a new fundraising market: gaming streamers.",
    image: "/images/gaming-for-good-case-study/hero-banner.png",
    href: "/projects/gaming-for-good",
  },
];

const programmes = [
  {
    number: "01.",
    title: "Understand & Align",
    description: "Build the evidence to know what to focus on next.",
  },
  {
    number: "02.",
    title: "De-risk and Plan",
    description: "Prove it works, before you spend big.",
  },
  {
    number: "03.",
    title: "Build & Launch",
    description: "Bring it to life, with confidence.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full bg-white md:min-h-[829px] px-s md:px-l py-xl flex flex-col items-center justify-center gap-m overflow-hidden">
        <div className="max-w-col-4 w-full flex flex-col gap-l items-center text-center">
          <h1 className="text-style-h1 text-text-dark">Take the guesswork out of innovation.</h1>
          <p className="text-style-subtitle text-text-dark-secondary">
            Audience research and evidence-led strategy for charities.
          </p>
        </div>

        <FloatingPillsHero />
      </section>

      {/* Examples */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="Examples">
          <p className="text-style-subtitle text-text-dark max-w-col-3">A selection of impact-driven work.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-m gap-y-l w-full">
            {projects.map((project) => (
              <CaseStudyCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </CaseStudySection>
      </section>

      {/* Services */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="Services">
          <p className="text-style-subtitle text-text-dark max-w-col-3">
            Three programmes to build evidence, confidence and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-m w-full">
            {programmes.map((programme) => (
              <a
                key={programme.number}
                href="/services"
                className={`bg-white border border-text-dark p-m flex flex-col justify-between gap-xl min-h-[387px] no-underline ${zoomImage}`}
              >
                <div className="flex flex-col gap-s">
                  <p className="text-style-subtitle text-text-dark">{programme.title}</p>
                  <p className="text-style-body text-text-dark-secondary">{programme.description}</p>
                </div>
                <div className="flex items-end justify-between w-full">
                  <p className="text-style-h1 text-text-dark">{programme.number}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/general/icon-arrow-corner.svg" alt="" className="w-[32px] h-[32px]" />
                </div>
              </a>
            ))}
          </div>
        </CaseStudySection>
      </section>

      {/* About */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="About">
          <p className="text-style-subtitle text-text-dark max-w-col-3">
            Combining engineering, fundraising and design.
          </p>
          <div className="flex flex-col gap-m max-w-col-3 text-style-body text-text-dark">
            <p>
              I&rsquo;ve spent my career trying to get closer to the impact — from civil
              engineering in London, to fundraising innovation at the British Red Cross, to design
              at Future Friendly in Sydney.
            </p>
            <p>
              Engineering taught me rigour, fundraising taught me what charities are up against,
              and design taught me how to test an idea before betting on it.
            </p>
          </div>
        </CaseStudySection>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-white border-t border-text-dark px-s md:px-l py-section flex flex-col items-center justify-center gap-xl">
        <ContactCTA variant="section" />
      </section>

      <Footer />
    </>
  );
}
