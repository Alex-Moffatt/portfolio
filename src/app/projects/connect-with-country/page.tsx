import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function ConnectWithCountryPage() {
  return (
    <>
      <Header />

      {/* Hero image — full bleed */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src="https://placehold.co/1600x1000"
          alt="Connect with Country"
          fill
          unoptimized
        />
      </div>

      {/* Project info */}
      <div className="px-s md:px-l">
        <ProjectInfo
          title="Connect with Country"
          client="Mobile app"
          tags={["UX", "Strategy"]}
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
          alt="Connect with Country 1"
          unoptimized
        />
        <Image
          src="https://placehold.co/1600x1000"
          alt="Connect with Country 2"
          unoptimized
        />
      </div>

      <Footer />
    </>
  );
}
