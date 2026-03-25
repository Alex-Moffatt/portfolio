import Image from "../Image";

type PersonalSectionProps = {
  bio: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export default function PersonalSection({ bio, images }: PersonalSectionProps) {
  return (
    <section id="personal" className="w-full bg-background py-section">
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
      <div className="mt-section px-s md:px-l md:flex">
        <div className="hidden md:block md:w-1/2" />
        <div className="w-full md:w-1/2">
          <p className="text-style-body-lg text-text-dark">{bio}</p>
        </div>
      </div>

      {/* Part 3 — Images */}
      <div className="mt-section px-s md:px-l space-y-section">
        {images.map((img, i) => (
          <Image key={i} src={img.src} alt={img.alt} unoptimized />
        ))}
      </div>
    </section>
  );
}
