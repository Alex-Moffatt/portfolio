import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function BankwestPage() {
  return (
    <>
      <Header />

      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image src="https://placehold.co/1600x1000" alt="Bankwest" fill unoptimized />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Bankwest website"
          client="Launching a new bankweu"
          tags={["Web Design", "UX", "Prototyping"]}
          paragraphs={[
            "A redesign of StartingBlocks.gov.au, Australia's free government resource for families navigating early childhood education. The site helps parents find and compare services, calculate childcare subsidies, and understand the National Quality Standard.",
            "The brief was clear: the existing landscape was fragmented and outdated, leaving families frustrated at a critical decision point. Over 22 weeks, we rebuilt the experience around simplicity with intuitive search, straightforward comparison tools, and plain-language guidance through an otherwise complex system.",
            "Research drove every decision. 15+ hours of user testing with a deliberately inclusive sample: metro and regional families, ATSI, EAL/D, and children with diverse needs. The results spoke for themselves. What once took families 12 hours to research took one.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="https://placehold.co/1600x1000" alt="Bankwest 1" unoptimized />
        <Image src="https://placehold.co/1600x1000" alt="Bankwest 2" unoptimized />
        <Image src="https://placehold.co/1600x1000" alt="Bankwest 3" unoptimized />
      </div>

      <Footer />
    </>
  );
}
