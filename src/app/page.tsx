import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PersonalSection from "@/components/sections/PersonalSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
    <Header />

    <HeroSection />

    <ProjectsSection
      intro="A selection of recent work across product, experience, brand, and digital strategy."
      projects={[
        {
          title: "Baseline",
          tags: ["App design"],
          image: "/images/baseline/hero.jpg",
          slug: "baseline",
          size: "large",
        },
        {
          title: "Bankwest",
          tags: ["Web design"],
          image: "/images/bankwest/hero.jpg",
          slug: "bankwest",
          size: "large",
        },
        {
          title: "Pave",
          tags: ["App design"],
          image: "/images/pave/hero.jpg",
          slug: "pave",
          size: "small",
        },
        {
          title: "Connect With Country",
          tags: ["Web design"],
          image: "/images/connect_with_country/hero.jpg",
          slug: "connect-with-country",
          size: "small",
        },
        {
          title: "NZEA",
          tags: ["Web design"],
          image: "/images/nzea/hero.jpg",
          slug: "nzea",
          size: "small",
        },
        {
          title: "Gaming For Good",
          tags: ["Experience design"],
          image: "/images/gaming_for_good/hero.jpg",
          slug: "gaming-for-good",
          size: "small",
        },
      ]}
    />

    <PhilosophySection
      principles={[
        {
          title: "Test to kill,",
          titleHighlight: "not to confirm",
          highlightColour: "#E36414",
          paragraphs: [
            "Most testing is just expensive validation of decisions that have already been made. Teams build something, put it in front of users, and unconsciously look for the nod. That's reassurance, not testing. The only way to actually learn is to go in looking for what's wrong: what doesn't land, what confuses people, what solves the wrong problem entirely.",
            "My approach is to build only what's necessary to answer the question in front of us, and to treat every round of testing as an attempt to break the idea rather than sell it. The faster you find out something is wrong, the less it costs to fix it — and the more confident you can be when the evidence actually holds up.",
          ],
        },
        {
          title: "Design",
          titleHighlight: "dangerously",
          highlightColour: "#9A031E",
          paragraphs: [
            "Mt design is safe. It follows convention, references what's already out there, and lands somewhere in the middle — functional, inoffensive, forgettable. Safe design gets a lukewarm response because that's exactly what it was built for.",
            "The products that push industries forward are the ones that polarise. They get a hell yes from the people they're made for, and a hell no from everyone else — and that's fine, because the hell no was never the target anyway. Getting to that hell yes requires a willingness to make calls that feel risky, to propose things that don't have a precedent yet, and to resist the gravitational pull towards what's already been done. Safe is comfortable. Safe is also how you become invisible.",
          ],
        },
        {
          title: "Know what to",
          titleHighlight: "fight for",
          highlightColour: "#FB8B24",
          paragraphs: [
            "Most designers drift. Some drift towards the customer and lose sight of what's actually buildable. Others drift towards aesthetics and forget tk whether anyone wants the thing in the first place. After eight years working across strategy, design, and product, I've learned that the job isn't to advocate for one side — it's to hold both simultaneously and know when each one deserves to win.",
            "That means being comfortable telling an engineer their constraint is worth designing around, and equally comfortable telling a stakeholder that a shortcut will cost them customer value they can't afford to lose. The best product decisions happen at that intersect, and getting there requires understanding both sides well enough to argue for either.",
          ],
        },
        {
          title: "Need first,",
          titleHighlight: "aesthetics second",
          highlightColour: "#9A031E",
          paragraphs: [
            "There's a version of design that's really just decoration — beautiful surfaces applied to products that haven't answered the fundamental question of whether they're actually useful. It's easy to do and it looks impressive in a portfolio. It also tends not tok.",
            "I care about execution. Craft matters, and how something looks and feels affects whether people trust it, use it, and come back to it. But aesthetics earn their place by solving the problem well — they're the result of good thinking, not a substitute for it. When I'm working on something, the question I keep coming back to is simple: does this actually meet the need? Everything else follows from that.",
          ],
        },
      ]}
    />

    <PersonalSection
      bio="Outside of work, my passions are surfing, golf, sandwiches and drum & bass — a classic mix really. I nerd out on puzzles, games and books, and am a pretty avid cricket and F1 fan."
      images={[{ src: "/images/personal/alex_moffatt.jpg", alt: "Alex Moffatt" }]}
    />

    <Footer />
    </>
  );
}
