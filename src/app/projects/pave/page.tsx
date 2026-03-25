import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function PavePage() {
  return (
    <>
      <Header />

      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image src="https://placehold.co/1600x1000" alt="Pave" fill unoptimized />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Pave"
          client="Mobile app"
          tags={["Product Design", "UX"]}
          paragraphs={[
            "Placeholder paragraph one.",
            "Placeholder paragraph two.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="https://placehold.co/1600x1000" alt="Pave 1" unoptimized />
        <Image src="https://placehold.co/1600x1000" alt="Pave 2" unoptimized />
      </div>

      <Footer />
    </>
  );
}
