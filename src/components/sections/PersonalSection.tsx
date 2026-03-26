import Image from "../Image";
import SplitLayout from "../SplitLayout";

type PersonalSectionProps = {
  bio: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export default function PersonalSection({ bio, images }: PersonalSectionProps) {
  return (
    <section id="personal" className="w-full bg-background section-py">
      {/* Part 1 — Section heading */}
      <div className="px-s md:px-l">
        <h2
          className="text-text-dark"
          style={{ fontSize: "var(--section-heading-size, 120px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Personal
        </h2>
      </div>

      {/* Part 2 — Bio */}
      <SplitLayout className="section-mt px-s md:px-l">
        <p className="text-style-body-lg text-text-dark">{bio}</p>
      </SplitLayout>

      {/* Part 3 — Images */}
      <div className="section-mt px-s md:px-l section-gap-y">
        {images.map((img, i) => (
          <Image key={i} src={img.src} alt={img.alt} unoptimized />
        ))}
      </div>
    </section>
  );
}
