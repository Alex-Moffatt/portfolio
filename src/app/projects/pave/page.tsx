import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function PavePage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/pave/hero.jpg" alt="Pave" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Pave"
          client="Mobile app"
          tags={["App design", "Strategy"]}
          paragraphs={[
            "A free app helping young Australians aged 14-24 quit vaping, codesigned with 50 young people and built on behaviour change theory.",
            "Australia's youth vaping rates quadrupled between 2019 and 2023. Existing quit resources were designed for adult smokers, leaving young people without targeted support at a critical point in their development. Pave was designed specifically for them: personalised onboarding based on behaviours and triggers, daily check-ins tracking streaks and savings, distraction tools for cravings, and a harm-minimisation approach that allows slip-ups without losing progress.",
            "Launched after 19 weeks and 22 research sessions. Early results: 4,500 downloads in three months, a 4.7 App Store rating, and peak ranking of #44 in Health and Fitness.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="/images/pave/01.jpg" alt="Pave 1" />
        <Image src="/images/pave/02.jpg" alt="Pave 2" />
        <Image src="/images/pave/03.jpg" alt="Pave 3" />
        <Image src="/images/pave/04.jpg" alt="Pave 4" />
        <Image src="/images/pave/05.jpg" alt="Pave 5" />
        <Image src="/images/pave/06.jpg" alt="Pave 6" />
        <Image src="/images/pave/07.jpg" alt="Pave 7" />
      </div>

      <Footer />
    </>
  );
}
