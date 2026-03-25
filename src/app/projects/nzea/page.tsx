import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function NzeaPage() {
  return (
    <>
      <Header />

      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image src="https://placehold.co/1600x1000" alt="NZEA" fill unoptimized />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="NZEA"
          client="Web platform"
          tags={["Web Design", "UX", "Strategy"]}
          paragraphs={[
            "Placeholder paragraph one.",
            "Placeholder paragraph two.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="https://placehold.co/1600x1000" alt="NZEA 1" unoptimized />
        <Image src="https://placehold.co/1600x1000" alt="NZEA 2" unoptimized />
      </div>

      <Footer />
    </>
  );
}
