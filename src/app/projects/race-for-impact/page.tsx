import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import { reveal, zoomImage, revealImage } from "@/lib/styles";
import TextBlock from "@/components/TextBlock";
import CtaButton from "@/components/CtaButton";
import ProjectHero from "@/components/ProjectHero";
import ProjectSection from "@/components/ProjectSection";

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 shrink-0">
      <path d="M14.5 9V20C14.4983 21.5908 13.8657 23.116 12.7408 24.2408C11.616 25.3657 10.0908 25.9983 8.5 26C8.23478 26 7.98043 25.8946 7.79289 25.7071C7.60536 25.5196 7.5 25.2652 7.5 25C7.5 24.7348 7.60536 24.4804 7.79289 24.2929C7.98043 24.1054 8.23478 24 8.5 24C9.56087 24 10.5783 23.5786 11.3284 22.8284C12.0786 22.0783 12.5 21.0609 12.5 20V19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H12.5C13.0304 7 13.5391 7.21071 13.9142 7.58579C14.2893 7.96086 14.5 8.46957 14.5 9ZM27 7H19.5C18.9696 7 18.4609 7.21071 18.0858 7.58579C17.7107 7.96086 17.5 8.46957 17.5 9V17C17.5 17.5304 17.7107 18.0391 18.0858 18.4142C18.4609 18.7893 18.9696 19 19.5 19H27V20C27 21.0609 26.5786 22.0783 25.8284 22.8284C25.0783 23.5786 24.0609 24 23 24C22.7348 24 22.4804 24.1054 22.2929 24.2929C22.1054 24.4804 22 24.7348 22 25C22 25.2652 22.1054 25.5196 22.2929 25.7071C22.4804 25.8946 22.7348 26 23 26C24.5908 25.9983 26.116 25.3657 27.2408 24.2408C28.3657 23.116 28.9983 21.5908 29 20V9C29 8.46957 28.7893 7.96086 28.4142 7.58579C28.0391 7.21071 27.5304 7 27 7Z" fill="#252122" />
    </svg>
  );
}

function Quote({
  text,
  attribution,
  static: isStatic = false,
}: {
  text: string;
  attribution: string;
  static?: boolean;
}) {
  return (
    <div className="group bg-white border border-text-dark relative flex flex-col md:flex-row gap-m items-start p-m w-full">
      {!isStatic && (
        <div className="gradient-mesh-alt absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <QuoteIcon />
      <div className="relative z-10 flex flex-col gap-m">
        <p className="text-style-quote text-text-dark">{text}</p>
        <p className="text-style-label text-text-dark-secondary uppercase">– {attribution}</p>
      </div>
    </div>
  );
}

export default function RaceForImpactPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <ProjectHero
        image="/images/race-for-impact/hero-banner.jpg"
        alt="Race for Impact"
        columns={3}
        headline="Discovery research into what makes Race for Impact fundraisers connect with a cause, and how to talk to them about it."
        stats={[
          { kind: "link", label: "Client", value: "High Impact Athletes", href: "https://www.highimpactathletes.org/" },
          { kind: "plain", label: "Duration", value: "2 weeks" },
          { kind: "icon", label: "Project type", value: "Discovery" },
        ]}
      />

      {/* Kevin Rassool quote */}
      <section className="gradient-mesh-alt w-full border-t border-text-dark px-s md:px-l pt-section pb-section flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-start-2 md:col-span-4">
            <Quote
              text="We&rsquo;re getting ready to implement some experiments based on this, excited to see these insights come to life!"
              attribution="Kevin Rassool, Tech lead"
              static
            />
          </div>
        </div>
      </section>

      {/* Context */}
      <ProjectSection label="Context" variant="first">
        <p className="text-style-subtitle text-text-dark max-w-col-3">
          A 2-week discovery project for High Impact Athletes.
        </p>

        <div className={`border border-text-dark p-xs relative hover:z-10 ${reveal} ${zoomImage}`}>
          <div className="relative w-full aspect-[1848/324]">
            <Image src="/images/race-for-impact/plan.png" alt="Race for Impact research plan" fill unoptimized />
          </div>
        </div>

        <TextBlock>
          <p>
            High Impact Athletes direct donations to the most effective charities in the world — organisations
            vetted by independent evaluators for how much good they do per dollar.
          </p>
          <p>
            Race for Impact is their partnership with HYROX, the fitness racing series. Racers buy a charity
            ticket and commit to fundraising for one of five HIA-vetted cause funds: Global Health, Mental
            Health, Women&rsquo;s Empowerment, Animal Welfare or Climate Solutions.
          </p>
          <p>
            It&rsquo;s an unusual ask. For most racers this is their first encounter with these charities,
            their first encounter with effective giving, and often their first time fundraising at all.
            They&rsquo;re raising money for organisations they&rsquo;ve never heard of, chosen on grounds
            they&rsquo;ve never come across.
          </p>
        </TextBlock>

        <div className={`${revealImage} w-full h-[184px]`}>
          <Image src="/images/race-for-impact/banner.jpg" alt="Race for Impact fundraiser page" fill unoptimized />
        </div>
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection label="Challenge">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            How do you get an emotion-led audience to connect to a cause built on rational, evidence-led
            selection?
          </p>

          <TextBlock>
            <p>
              HIA came to me with a wording question: should impact be expressed as years of depression
              averted, or as lives improved?
            </p>
            <p>
              Underneath it sat a bigger one. Effective giving makes a rational case — this charity does more
              good per dollar than that one — but the people signing up were making an emotional decision in a
              matter of minutes. Nobody knew which of those two things was doing the work, or whether either
              was landing at all.
            </p>
            <p>Answering the wording question meant understanding the audience first.</p>
          </TextBlock>
        </div>

        <div className="flex flex-col md:flex-row gap-m md:aspect-[1920/1080]">
          <div className={`${revealImage} w-full h-[260px] md:w-auto md:h-full md:flex-1`}>
            <Image src="/images/race-for-impact/gallery-1.png" alt="Race for Impact research 1" fill unoptimized />
          </div>
          <div className={`${revealImage} w-full h-[260px] md:w-auto md:h-full md:flex-1`}>
            <Image src="/images/race-for-impact/gallery-2.jpg" alt="Race for Impact research 2" fill unoptimized />
          </div>
          <div className={`${revealImage} w-full h-[260px] md:w-auto md:h-full md:flex-1`}>
            <Image src="/images/race-for-impact/gallery-3.png" alt="Race for Impact research 3" fill unoptimized />
          </div>
        </div>
      </ProjectSection>

      {/* Approach */}
      <ProjectSection label="Approach" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Background research</p>
          <TextBlock>
            <p>
              I started with what HIA already had: previous research, outcomes, open questions, and everything
              they&rsquo;d been debating internally.
            </p>
            <p>
              That defined the shape of the problem. Two things had to hold before a racer would fundraise —
              trust that the money would be well spent, and connection to the cause they&rsquo;d chosen. It
              also gave me a working model of the audience, which I split into four groups by what actually
              gets them to a cause: evidence-led, story-led, persuadable, and disengaged.
            </p>
            <p>
              The persuadable group became the target: they had no obvious personal reason to fundraise and so
              would be looking into the causes to understand which they connected with most.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/race-for-impact/approach-background-research.png" alt="Background research" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Data analysis</p>
          <TextBlock>
            <p>
              Rather than invent the connection levers from theory, I scraped and analysed the custom messages
              fundraisers had written on their own pages. What reasons did people actually give, unprompted,
              when nobody was asking?
            </p>
            <p>
              Seven levers came out of it: personal driver, inspiration and legacy, problem empathy, impact and
              effectiveness, athleticism, local-to-global, and privilege.
            </p>
            <p>
              This came with a catch. Only around 10% of fundraisers write anything custom at all, so it skewed
              toward the most expressive and most engaged — precisely the people who arrive with a reason
              already. Which meant these levers were hypotheses drawn from the wrong population, and needed
              testing against real racers rather than assumed.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/race-for-impact/approach-data-analysis.png" alt="Data analysis" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Assumptions and learning goals</p>
          <TextBlock>
            <p>
              I mapped out every assumption underneath the levers and the trust question, and grouped them
              into three learning goals: how trust is built, how racers connect with the causes, and how and
              when to present cause information.
            </p>
            <p>
              That gave the research a spine. Every question in the guide, and every element of the stimulus,
              mapped back to something specific we were trying to find out.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/race-for-impact/approach-learning-goals.png" alt="Assumptions and learning goals" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Interviews</p>
          <TextBlock>
            <p>Five sessions with racers signed up to HYROX Melbourne.</p>
            <p>
              Why interviews, and why with something to react to: asking hypothetical questions about charity
              is close to useless. People consistently believe themselves more altruistic than they are, and
              will happily tell you a message moved them when it didn&rsquo;t. So every session was built
              around reactions to real material rather than opinions about ideas.
            </p>
            <p>Each ran in three parts:</p>
            <p>
              Recall — what racers remembered of their own sign-up, unprompted. This was how I established
              what had actually got through before showing them anything, and it&rsquo;s where the central
              finding first surfaced.
            </p>
            <p>
              The existing journey — walking the live pages together, to see what registers, what gets
              misread, and what gets skipped entirely.
            </p>
            <p>
              The prototype — an interactive version of the cause-selection experience I built with the levers
              designed in and every content block toggleable, so individual levers could be swapped live and
              tested one at a time.
            </p>
            <p>
              Trust, confidence and passion were scored 1–10 at three points: cold, after the live pages, and
              after the prototype.
            </p>
          </TextBlock>
        </div>
        <div className={`${revealImage} w-full aspect-[1280/756]`}>
          <Image src="/images/race-for-impact/approach-interviews.png" alt="Interviews" fill unoptimized />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Synthesis</p>
          <TextBlock>
            <p>
              I pulled the findings into a strategy narrative — four learnings, each with a design principle
              HIA could apply to any communication with a fundraiser, not just the page I&rsquo;d been briefed
              on.
            </p>
          </TextBlock>
        </div>
      </ProjectSection>

      {/* Learnings */}
      <ProjectSection label="Learnings" justify="start">
        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            Racers don&rsquo;t go looking — you have to put it in front of them.
          </p>
          <TextBlock>
            <p>
              Racers choose a cause in minutes and don&rsquo;t hunt for more. Most had never seen the content
              that would have informed the choice.
            </p>
            <p>→ Give racers the information that matters at the moment it matters. At cause selection, that&rsquo;s the problem and the impact.</p>
          </TextBlock>
        </div>
        <div className="w-full max-w-col-3">
          <Quote
            text="I wish I saw [the cause info] first... we joined straight away without actually thinking of the fundraising part."
            attribution="Participant 02"
          />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            Everyone has a connection — the job is helping them realise it and deepen it.
          </p>
          <TextBlock>
            <p>
              Racers arrive with something to connect to. Being concrete about the problem, and offering
              stories they can see themselves in, is what turns that into something they can say out loud.
            </p>
            <p>→ Lead with the problem, and give racers a way to see themselves in it.</p>
          </TextBlock>
        </div>
        <div className="w-full max-w-col-3">
          <Quote
            text="I&rsquo;ve had mental health issues in the past, so for me, I&rsquo;m doing it with 150% of my heart. Whereas if I chose animal welfare, I know I would be 70, 80%."
            attribution="Participant 01"
          />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">Numbers are what racers remember.</p>
          <TextBlock>
            <p>
              Specific numbers make the problem land. Personal numbers — what your target delivers — make the
              fundraising feel worthwhile. General claims do neither.
            </p>
            <p>→ Put it in numbers — specific for the problem, personal for the impact.</p>
          </TextBlock>
        </div>
        <div className="w-full max-w-col-3">
          <Quote
            text="It was like 93 for $1000 in women&rsquo;s empowerment versus 3,400 animals for $1000."
            attribution="Participant 04, on how she chose between the causes"
          />
        </div>

        <div className="flex flex-col gap-m max-w-col-3">
          <p className="text-style-subtitle text-text-dark">
            Trust is borrowed from HYROX and reinforced by evidence.
          </p>
          <TextBlock>
            <p>
              No racer could name the organisation they were raising for. Named charities, cited sources and
              evaluator links reassure even when nobody clicks them — and have to hold up for the few who do.
            </p>
            <p>→ Show your working.</p>
          </TextBlock>
        </div>
        <div className="w-full max-w-col-3">
          <Quote
            text="HYROX is very well-known and trustworthy. They wouldn&rsquo;t collaborate with someone they couldn&rsquo;t trust."
            attribution="Participant 03"
          />
        </div>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection label="Outcome">
        <p className="text-style-subtitle text-text-dark max-w-col-3">
          A practical framework — not a single-page fix — for how HIA communicates with fundraisers across
          every touchpoint: cause selection, onboarding, and post-race comms. The team is now applying and
          testing the recommendations directly.
        </p>
        <div className={`${revealImage} w-full aspect-[1920/1080]`}>
          <Image src="/images/race-for-impact/outcome-image.png" alt="Race for Impact outcome" fill unoptimized />
        </div>
      </ProjectSection>

      {/* CTA */}
      <section className="w-full bg-white border-t border-text-dark min-h-screen px-s md:px-l pt-m pb-section flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-l text-center">
          <h2 className="text-style-h2 text-text-dark">Read the full research</h2>
          <p className="text-style-body text-text-dark max-w-col-3">
            The complete deck covers the audience model, all 18 assumptions and what the evidence said about each,
            the connection levers in full, and a roadmap of recommendations.
          </p>
          <CtaButton
            href="/files/race-for-impact/race-for-impact-deck.pdf"
            download
            className="inline-flex justify-between gap-s w-full max-w-[482px]"
          >
            Download the deck
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M8.5 1.5C8.5 1.22386 8.27614 1 8 1C7.72386 1 7.5 1.22386 7.5 1.5V8.79289L5.35355 6.64645C5.15829 6.45118 4.84171 6.45118 4.64645 6.64645C4.45118 6.84171 4.45118 7.15829 4.64645 7.35355L7.64645 10.3536C7.84171 10.5488 8.15829 10.5488 8.35355 10.3536L11.3536 7.35355C11.5488 7.15829 11.5488 6.84171 11.3536 6.64645C11.1583 6.45118 10.8417 6.45118 10.6464 6.64645L8.5 8.79289V1.5Z" fill="currentColor" />
              <path d="M2.75 10.75C2.75 10.4739 2.52614 10.25 2.25 10.25C1.97386 10.25 1.75 10.4739 1.75 10.75V12.25C1.75 13.2165 2.5335 14 3.5 14H12.5C13.4665 14 14.25 13.2165 14.25 12.25V10.75C14.25 10.4739 14.0261 10.25 13.75 10.25C13.4739 10.25 13.25 10.4739 13.25 10.75V12.25C13.25 12.6642 12.9142 13 12.5 13H3.5C3.08579 13 2.75 12.6642 2.75 12.25V10.75Z" fill="currentColor" />
            </svg>
          </CtaButton>
        </div>
      </section>

      <Footer />
    </>
  );
}
