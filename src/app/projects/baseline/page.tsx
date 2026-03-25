import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function BaselinePage() {
  return (
    <>
      <Header />

      {/* Hero image — full bleed */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src="https://placehold.co/1600x1000"
          alt="Baseline"
          fill
          unoptimized
        />
      </div>

      {/* Project info */}
      <div className="px-s md:px-l">
        <ProjectInfo
          title="Baseline"
          client="Mobile app"
          tags={["Product Design", "Strategy", "Development"]}
          paragraphs={[
            "Placeholder paragraph one.",
            "Placeholder paragraph two.",
          ]}
        />
      </div>

      {/* Image blocks — full bleed */}
      <div className="flex flex-col gap-xl">
        <Image
          src="https://placehold.co/1600x1000"
          alt="Baseline 1"
          unoptimized
        />
        <Image
          src="https://placehold.co/1600x1000"
          alt="Baseline 2"
          unoptimized
        />
      </div>

      <Footer />
    </>
  );
}
