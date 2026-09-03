import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import { reveal, zoomImage, revealImage } from "@/lib/styles";
import TextBlock from "@/components/TextBlock";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";

export default function PavePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <ProjectHero
        image="/images/pave-case-study/hero-banner.jpg"
        alt="Pave"
        headline="Pave — a free app for 16–24 year olds, co-designed with young people and built on behaviour change theory."
        stats={[
          { kind: "link", label: "Client", value: "Cancer Institute NSW", href: "https://www.cancer.nsw.gov.au/" },
          { kind: "plain", label: "Duration", value: "5 months" },
          { kind: "icon", label: "Project type", value: "Design & Build" },
          { kind: "plain", label: "Role", value: "Senior Product Designer" },
        ]}
      />

      {/* Context */}
      <ProjectSection label="Context" variant="first">
        <p className="text-style-subtitle text-text-dark max-w-col-3">
          A 19-week design &amp; build project for Cancer Institute NSW.
        </p>

        <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
          <div className="relative w-full aspect-[1848/324]">
            <Image src="/images/pave-case-study/context-timeline.png" alt="Pave project timeline" fill unoptimized />
          </div>
        </div>

        <TextBlock>
          <p>
            Cancer Institute NSW is the state&rsquo;s cancer control agency, responsible for prevention
            programmes including tobacco and vaping cessation.
          </p>
          <p>Australia&rsquo;s youth vaping rates quadrupled between 2019 and 2023, from 5.3% to 21%.</p>
        </TextBlock>

        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/context-slide.jpg" alt="Pave context" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection label="Challenge">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            How do you help someone quit when every existing tool was built for somebody else?
          </p>

          <TextBlock>
            <p>
              Existing quit resources were designed for adult smokers. That left 16–24 year olds without
              targeted support at a critical point in their development — the group whose rates were rising
              fastest, and the group with the least relevant help available.
            </p>
          </TextBlock>
        </div>

        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/challenge-slide.jpg" alt="Pave challenge" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Approach */}
      <ProjectSection label="Approach" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Discovery &amp; planning</p>
          <TextBlock>
            <p>
              Research to understand the audience and where the opportunities were, then exploring and testing
              those opportunities before committing to any of them. Co-designed with a panel of young vapers
              and tested over 22 sessions with a similar audience. That produced a roadmap of the end-to-end
              experience.
            </p>
            <p>
              Running alongside it, we worked with Cancer Institute NSW and their subject matter experts to
              develop a behaviour change model for this specific audience — young people vaping, not adults
              smoking. That model then determined which features the app needed. The harm-minimisation
              approach came directly from it: slip-ups don&rsquo;t reset your progress, because that&rsquo;s
              how quitting actually goes.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/approach-discovery.jpg" alt="Discovery and planning" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Design</p>
          <TextBlock>
            <p>
              Detailed design of each opportunity, then stitching them into a single end-to-end experience.
              From there, translating it into the components and templates developers could build from.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/approach-design.jpg" alt="Design" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Build &amp; testing</p>
          <TextBlock>
            <p>
              Handover to the development team, working alongside them through build. Quality assurance with
              the developers, checking the built product against the designs.
            </p>
          </TextBlock>
        </div>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection label="Outcome" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            An app built specifically for young people rather than adapted from adult resources.
          </p>
          <TextBlock>
            <p>
              Personalised onboarding based on individual behaviours and triggers. Daily check-ins tracking
              streaks and savings. Distraction tools for cravings. And a harm-minimisation approach that
              allows slip-ups without losing progress — designed around how quitting actually goes rather than
              an all-or-nothing model.
            </p>
            <p>4,500 downloads in three months</p>
            <p>4.7 App Store rating</p>
            <p>#44 in Health &amp; Fitness</p>
          </TextBlock>
        </div>

        <div className={`${revealImage} w-full aspect-[1280/756]`}>
          <Image src="/images/pave-case-study/outcome-1.jpg" alt="Pave outcome 1" fill unoptimized />
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/outcome-2.jpg" alt="Pave outcome 2" fill unoptimized />
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/pave-case-study/outcome-3.jpg" alt="Pave outcome 3" fill unoptimized />
        </div>
      </ProjectSection>

      <Footer />
    </>
  );
}
