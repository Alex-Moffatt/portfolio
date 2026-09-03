import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import { reveal, zoomImage, revealImage } from "@/lib/styles";
import TextBlock from "@/components/TextBlock";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";

export default function GamingForGoodPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <ProjectHero
        image="/images/gaming-for-good-case-study/hero-banner.png"
        alt="Gaming For Good"
        headline="Opening a new fundraising market for the British Red Cross: gaming streamers."
        stats={[
          { kind: "link", label: "Organisation", value: "British Red Cross", href: "https://www.redcross.org.uk/" },
          { kind: "plain", label: "Duration", value: "6 months" },
          { kind: "plain", label: "Project type", value: "In house" },
          { kind: "plain", label: "Role", value: "Product Designer" },
        ]}
      />

      {/* Context */}
      <ProjectSection label="Context" variant="first">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            A 6-month pilot project whilst working at British Red Cross.
          </p>
          <p className="text-style-body text-text-dark">
            I led the campaign end to end: research, funnel build, marketing strategy, analytics and
            optimisation — working with legal on risk mitigation, and with Twitch, Tiltify, corporate
            partners, event managers and internal teams on delivery.
          </p>
        </div>

        <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
          <div className="relative w-full aspect-[1860/324]">
            <Image src="/images/gaming-for-good-case-study/context-timeline.png" alt="Gaming For Good project timeline" fill unoptimized />
          </div>
        </div>

        <TextBlock>
          <p>
            Charities in the US were beginning to build fundraising opportunities for a new audience:
            streamers. Nobody in the UK had done it successfully.
          </p>
          <p>
            For the British Red Cross this was unfamiliar territory in every direction. The average donor
            age was 67. There was no in-house experience of the streaming market, and no UK precedent to
            learn from.
          </p>
        </TextBlock>
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection label="Challenge">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            How do we engage young streamers to fundraise for us without compromising our fundamental
            values?
          </p>

          <div className="flex flex-col gap-m text-style-body text-text-dark">
            <p>Three problems at once.</p>
            <ul className="list-disc ml-m">
              <li>Young — the audience was decades younger than our existing donor base.</li>
              <li>
                Streamers — a market we had no experience in, and hadn&rsquo;t seen anyone succeed in in the
                UK.
              </li>
              <li>
                Fundamental values — ethically complex: a humanitarian organisation raising funds from
                streams of, among other things, war games.
              </li>
            </ul>
          </div>
        </div>

        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/gaming-for-good-case-study/challenge-slide.png" alt="Gaming For Good challenge" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Approach */}
      <ProjectSection label="Approach" justify="start">
        <p className="text-style-subtitle text-text-dark max-w-col-3">
          Discovery to scale: four stages built on testing, honest failure, and a data-led pivot.
        </p>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Discovery &amp; setup</p>
          <TextBlock>
            <p>
              Market research plus interviews with both experts and streamers, to understand what streamers
              actually wanted and what charities entering the space were finding.
            </p>
            <p>
              Four things came out of it. Streamers responded most to our emergency work — the appeal of
              going live in response to something current. They wanted relationships that didn&rsquo;t feel
              transactional, with people who understood gaming. They suggested establishing credibility in
              the space before running a general campaign. And internally, we needed a plan to manage the
              risk of association with value-undermining content.
            </p>
            <p>
              That last one was the hardest, and it needed solving before anything else could start.
              Working with the legal team, we built a mitigation plan covering the risks of a humanitarian
              organisation being associated with content that could undermine its values — the practical
              question of what happens when someone raises money for the Red Cross while streaming a war
              game. It gave the organisation a defensible position, and the campaign a green light.
            </p>
            <p>
              Alongside the research, I built the core infrastructure for the conversion funnel: marketing
              strategy, ads, landing page, fundraising page and data dashboard. The point was to be able to
              launch fast and learn faster.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/gaming-for-good-case-study/approach-discovery.png" alt="Discovery and setup" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Launch &amp; track</p>
          <TextBlock>
            <p>
              A marketing strategy optimised around learning and cost, mixing organic, paid and viral
              channels — starting on Facebook and Instagram to test messaging and content.
            </p>
            <p>
              Working with Twitch, Tiltify, corporate partners, event managers and internal teams, I ran a
              24-hour influencer streaming event to build viral awareness: 100+ streamers contacted,
              engagement tracked, 12 locked in.
            </p>
            <p>
              The landing page was built to A/B test messaging and hooks. The analytics setup ingested data
              from ads through to fundraisers, so I could read the whole funnel from day one.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/gaming-for-good-case-study/approach-launch.jpg" alt="Launch and track" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Diagnose &amp; pivot</p>
          <div className="flex flex-col gap-m text-style-body text-text-dark">
            <p>
              The initial marketing didn&rsquo;t perform. I went into the funnel data, interviewed people who
              had signed up and people who hadn&rsquo;t, and read the comments and feedback to work out why.
            </p>
            <p>Four findings changed the campaign:</p>
            <ol className="list-decimal ml-m">
              <li>
                <span className="font-bold">Focus on gamers.</span>{" "}
                It&rsquo;s much easier to get people to
                do one new thing than two. The people signing up were already familiar with streaming, so
                all the content pivoted towards gaming.
              </li>
              <li>
                <span className="font-bold">Don&rsquo;t try to be clever.</span>{" "}
                After A/B testing many
                variations of creative and copy, the single biggest driver of quality traffic was
                unambiguous imagery and messaging: gaming controllers and the challenge.
              </li>
              <li>
                <span className="font-bold">A simple, catchy ask.</span>{" "}
                Instead of leaving the ask open and
                creating choice paralysis, we gave people a specific challenge that nodded to the cause —
                game for 19 hours, for COVID-19.
              </li>
              <li>
                <span className="font-bold">No memes.</span>{" "}
                They looked great on paper: low CPM, high click
                rate. But the traffic was low quality and didn&rsquo;t convert to fundraisers.
              </li>
            </ol>
            <p>I updated everything from the ads through to the streamer resources. And it took off.</p>
          </div>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/gaming-for-good-case-study/approach-diagnose.png" alt="Diagnose and pivot" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Optimise &amp; scale</p>
          <TextBlock>
            <p>Continued A/B testing on ads and landing pages to refine messaging and imagery.</p>
            <p>
              Automated the comms and analytics I&rsquo;d been running manually — including onboarding
              emails triggered by where a sign-up had got to, and retargeting for those yet to fundraise.
            </p>
            <p>
              Added Reddit, Google AdWords and corporate partnerships to drive new traffic, monitoring
              existing channels as we increased ad spend. Set up a Discord channel to field questions and
              build a sense of community among the fundraisers.
            </p>
          </TextBlock>
        </div>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection label="Outcome" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            $676k raised. 2.1x ROI. 1,850 active fundraisers.
          </p>
          <TextBlock>
            <p>
              The campaign reached 62 million people, narrowing to 380k landing page clicks (0.6% CTR), 40k
              fundraising page visits, 6,600 registrations and 1,850 active fundraisers.
            </p>
            <p>
              The steep drop reflects the scale of broad-reach advertising rather than underperformance —
              and each stage&rsquo;s efficiency is what justified narrowing the audience to gamers
              mid-campaign, which drove stronger downstream conversion.
            </p>
            <p>
              The funds and the fundraiser count, not the funnel percentages, are the real measure: good
              targeting, messaging and content eventually drive high-quality conversions.
            </p>
          </TextBlock>
        </div>

        <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
          <div className="relative w-full aspect-[1882/1036]">
            <Image src="/images/gaming-for-good-case-study/outcome-funnel.png" alt="Gaming For Good funnel results" fill unoptimized />
          </div>
        </div>

        <TextBlock>
          <p>
            A full-time manager was brought in to run the new revenue stream. Campaigns have since raised
            over $2.5m, with many of the original fundraisers returning to stream again.
          </p>
          <p>
            The campaign also opened the door to corporate partners and larger streamer networks, building
            the British Red Cross&rsquo;s reputation and awareness in a market it previously had no presence
            in.
          </p>
        </TextBlock>
      </ProjectSection>

      <Footer />
    </>
  );
}
