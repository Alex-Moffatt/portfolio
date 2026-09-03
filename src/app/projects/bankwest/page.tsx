import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import { reveal, zoomImage, revealImage } from "@/lib/styles";
import TextBlock from "@/components/TextBlock";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";

export default function BankwestPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <ProjectHero
        image="/images/bankwest-case-study/hero-banner.jpg"
        alt="Bankwest"
        headline="A ground-up rebuild of bankwest.com.au, reorganised around what customers are actually trying to do."
        stats={[
          { kind: "link", label: "Client", value: "Bankwest", href: "https://www.bankwest.com.au/" },
          { kind: "plain", label: "Duration", value: "9 months" },
          { kind: "icon", label: "Project type", value: "Design & Build" },
          { kind: "plain", label: "Role", value: "Senior Product Designer" },
        ]}
      />

      {/* Context */}
      <ProjectSection label="Context" variant="first">
        <p className="text-style-subtitle text-text-dark max-w-col-3">
          A 9-month design &amp; build project for Bankwest.
        </p>

        <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
          <div className="relative w-full aspect-[1896/324]">
            <Image src="/images/bankwest-case-study/context-timeline.png" alt="Bankwest project timeline" fill unoptimized />
          </div>
        </div>

        <TextBlock>
          <p>
            Bankwest is one of Australia&rsquo;s largest retail banks. Its website is where customers compare
            products, work out what things cost, and decide what&rsquo;s right for them.
          </p>
          <p>
            Banking has long left customers feeling overwhelmed, struggling to compare products, understand
            fees, and assess what suits their situation.
          </p>
        </TextBlock>

        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/bankwest-case-study/context-slide.jpg" alt="Bankwest website context" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection label="Challenge">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            How do you help people make confident decisions about money, when the products are inherently
            complex?
          </p>

          <TextBlock>
            <p>
              Spending, saving and borrowing money shouldn&rsquo;t be so complex, but simplifying can&rsquo;t
              mean hiding. Customers need to genuinely understand what they&rsquo;re choosing, and they need to
              trust the numbers they&rsquo;re shown.
            </p>
          </TextBlock>
        </div>

        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/bankwest-case-study/challenge-slide.jpg" alt="Bankwest challenge" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Approach */}
      <ProjectSection label="Approach" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Discovery</p>
          <TextBlock>
            <p>
              We started with Bankwest&rsquo;s own strategy documents, looking for where the biggest
              opportunities sat — but also to answer a question that hadn&rsquo;t been settled: who were they
              actually competing with?
            </p>
            <p>
              Positioning as a challenger to the big four is a different product to positioning against
              Revolut or Monzo. The site couldn&rsquo;t be designed until that was clear. Alongside it, we
              defined the audience, which set the terms for everything that followed.
            </p>
          </TextBlock>
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Opportunity exploration</p>
          <TextBlock>
            <p>Four areas came out of discovery, each a distinct problem:</p>
            <ul className="list-disc ml-m">
              <li>Comparing products — the core decision customers arrive to make</li>
              <li>Home loan calculators — the highest-stakes numbers on the site</li>
              <li>Support — where customers go when the rest hasn&rsquo;t worked</li>
              <li>High-level navigation — how people find any of it</li>
            </ul>
            <p>
              Each ran through the same loop: market scan, prototype, test, insight, then fold the learnings
              back into the prototype. Rather than designing four features and validating at the end, each
              area got several passes before anything was committed.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/bankwest-case-study/approach-slide.jpg" alt="Bankwest opportunity exploration" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Brand design</p>
          <TextBlock>
            <p>
              Bankwest had a brand document but had never executed it digitally. This phase translated it into
              a working component set — turning a brand book into something that could actually be built with.
            </p>
          </TextBlock>
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Detailed design</p>
          <TextBlock>
            <p>
              The four opportunities had been explored separately. This phase stitched them into a single
              end-to-end experience, then went deep: information architecture, the full component set, and
              documentation developers could build from.
            </p>
            <p>
              The site was reorganised around four core customer needs — Spend, Save, Borrow, Support —
              replacing a product-led structure with one that matched how customers arrive. Interactive
              comparison tools let customers weigh products side by side. Personalised calculators surfaced
              the numbers that actually mattered to them. Navigation, search and contextual help reduced
              friction at every step.
            </p>
            <p>
              From there it was working directly with the development team through build, QA&rsquo;ing
              against the designs, and resolving what came up.
            </p>
          </TextBlock>
        </div>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection label="Outcome" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            A new bankwest.com.au, and the first digital execution of the Bankwest brand.
          </p>
          <TextBlock>
            <p>
              The site is organised around how customers think rather than how the bank is structured: four
              core needs, Spend, Save, Borrow and Support, replacing a product-led hierarchy. Products and
              their explanations were simplified so people can actually tell what they&rsquo;re choosing
              between. Comparison tools let customers weigh options side by side, and personalised calculators
              surface the numbers that matter to their situation rather than generic ones.
            </p>
            <p>
              Nine months, 34 research sessions, and a site built for digital natives — animations and
              interactions that bring it to life without sacrificing speed or security.
            </p>
          </TextBlock>
        </div>

        <div className={`${revealImage} w-full aspect-[1280/756]`}>
          <Image src="/images/bankwest-case-study/outcome-1.jpg" alt="Bankwest outcome 1" fill unoptimized />
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/bankwest-case-study/outcome-2.jpg" alt="Bankwest outcome 2" fill unoptimized />
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/bankwest-case-study/outcome-3.jpg" alt="Bankwest outcome 3" fill unoptimized />
        </div>
      </ProjectSection>

      <Footer />
    </>
  );
}
