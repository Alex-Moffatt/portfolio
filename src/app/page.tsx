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
          title: "Build lean,",
          titleHighlight: "learn quickly",
          highlightColour: "#FB8B24",
          paragraphs: [
            "My approach is to build only what's necessary to answer the question in front of us, and to treat every round of testing as an attempt to break the idea rather than sell it. The faster you find out something is wrong, the less it costs to fix it, and the more confident you can be when the evidence actually holds up.",
          ],
        },
        {
          title: "Needs first,",
          titleHighlight: "aesthetics second",
          highlightColour: "#9A031E",
          paragraphs: [
            "Successful products solve a genuine problem well. Good aesthetics are the result of good thinking, not a substitute for it. When I'm working on something, the question I keep coming back to is simple: does this actually meet the need? Everything else follows from that.",
          ],
        },
        {
          title: "Hold out for the",
          titleHighlight: "hell yes",
          highlightColour: "#0F4C5C",
          paragraphs: [
            "Most products launch to a polite shrug. Teams mistake the absence of strong objections for validation, but lukewarm is just a slower kind of failure. After hundreds of hours of testing with real people, I've learned to tell the difference between \"yes, that works\" and \"yes, I actually want that.\" The first gets you a product. The second gets you one people come back to.",
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
