import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function NzeaPage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/nzea/hero.jpg" alt="NZEA" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="NZEA"
          client="Web platform"
          tags={["Web design", "Brand", "Strategy"]}
          paragraphs={[
            "A website for the Net Zero Economy Authority, helping Australians understand Australia's transition away from coal and gas, and what it means for them.",
            "The design challenge was significant: complex legislation, four distinct audiences (workers, communities, industry, and government), and a brand that had never been translated into a digital format. The decision was made to prioritise workers — the people most directly affected by the transition — and build the information architecture around their needs first.",
            "Built over 12 weeks with 15 hours of user testing, the result is a site that makes dense policy feel accessible, guiding workers through the practical support available to them as power stations close and industries shift.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="/images/nzea/01.jpg" alt="NZEA 1" />
        <Image src="/images/nzea/02.jpg" alt="NZEA 2" />
        <Image src="/images/nzea/03.jpg" alt="NZEA 3" />
        <Image src="/images/nzea/04.jpg" alt="NZEA 4" />
        <Image src="/images/nzea/05.jpg" alt="NZEA 5" />
        <Image src="/images/nzea/06.jpg" alt="NZEA 6" />
        <Image src="/images/nzea/07.jpg" alt="NZEA 7" />
      </div>

      <Footer />
    </>
  );
}
