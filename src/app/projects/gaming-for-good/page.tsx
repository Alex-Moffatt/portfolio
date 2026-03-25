import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function GamingForGoodPage() {
  return (
    <>
      <Header />

      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image src="https://placehold.co/1600x1000" alt="Gaming For Good" fill unoptimized />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Gaming For Good"
          client="British Red Cross"
          tags={["Strategy", "Marketing"]}
          paragraphs={[
            "Placeholder paragraph one.",
            "Placeholder paragraph two.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="https://placehold.co/1600x1000" alt="Gaming For Good 1" unoptimized />
        <Image src="https://placehold.co/1600x1000" alt="Gaming For Good 2" unoptimized />
      </div>

      <Footer />
    </>
  );
}
