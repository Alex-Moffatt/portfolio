import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import CaseStudySection from "@/components/CaseStudySection";
import SectionIntro from "@/components/SectionIntro";
import VideoHero from "@/components/sections/VideoHero";
import Pill from "@/components/Pill";

const locations = [
  { label: "London", icon: "/images/general/icon-location-london.svg" },
  { label: "Sydney", icon: "/images/general/icon-location-sydney.svg" },
  { label: "São Paulo", icon: "/images/general/icon-location-sao-paulo.svg" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <VideoHero src="/videos/about-hero.mp4">
        <div className="px-s md:px-l pt-section pb-xl flex flex-col items-center">
          <div className="max-w-col-4 w-full flex flex-col gap-m items-center text-center">
            <h1 className="text-style-h1 text-text-dark">Sydney-based design.</h1>
            <p className="text-style-subtitle text-text-dark-secondary">Supporting global work.</p>
          </div>

          <div className="flex flex-wrap gap-xs justify-center mt-m">
            {locations.map((location) => (
              <Pill key={location.label} className="flex items-center gap-xs w-fit">
                {location.label}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={location.icon} alt="" className="w-[14px] h-[14px]" />
              </Pill>
            ))}
          </div>
        </div>
      </VideoHero>

      {/* Experience */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="Experience">
          <SectionIntro heading="Combining engineering, fundraising and design.">
            <p>
              I began my career as a civil engineer in London, wanting to improve the lives of
              society through good infrastructure.
            </p>
            <p>
              I felt removed from the impact though, and so I decided to transition to the
              non-profit world, where I joined the British Red Cross Fundraising Innovation team.
            </p>
            <p>
              Whilst I loved the work, I grew frustrated by the aversion to risk and slow pace of
              delivery. When I moved to Sydney, I decided I still wanted to create impact but in
              an environment where I wasn&rsquo;t so constrained by internal politics, so I
              decided to join Future Friendly, an impact-driven design agency.
            </p>
            <p>
              I&rsquo;m now bringing together my engineering, fundraising and design backgrounds
              to help organisations create impact in an evidence-driven way.
            </p>
          </SectionIntro>
        </CaseStudySection>
      </section>

      {/* On impact */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="On impact">
          <SectionIntro heading="Effective impact to the front of the queue.">
            <p>
              Impact has been the thread throughout my career, and I&rsquo;m driven by putting my
              energy and time into work that genuinely makes a difference.
            </p>
            <p>
              I&rsquo;ve been part of Effective Altruism for the last 10 years and am especially
              passionate about supporting high-impact charities. If you&rsquo;re working on
              something in that space, I&rsquo;d love to hear from you.
            </p>
          </SectionIntro>
        </CaseStudySection>
      </section>

      {/* Personal */}
      <section className="w-full bg-background border-t border-text-dark px-s md:px-l pt-m pb-section flex flex-col">
        <CaseStudySection label="Personal" justify="start">
          <SectionIntro heading="Sports, games and food.">
            <p>
              I live in Maroubra, where I am lucky enough to be close enough to the beach to surf
              every day. If I&rsquo;m not in the water, I&rsquo;m in the mountains, in the
              kitchen, or on the golf course.
            </p>
          </SectionIntro>

          <div className="flex flex-col sm:flex-row gap-s w-full">
            <div className="flex-1 min-w-0 aspect-[1920/1080] border border-text-dark relative overflow-hidden grayscale-0 md:grayscale">
              <Image src="/images/personal/about-photo-1.jpg" alt="Alex surfing" fill unoptimized />
            </div>
            <div className="aspect-[1920/1080] sm:aspect-auto w-full sm:w-[132px] shrink-0 border border-text-dark relative overflow-hidden grayscale-0 md:grayscale">
              <Image src="/images/personal/about-photo-2.jpg" alt="Alex" fill unoptimized />
            </div>
            <div className="flex-1 min-w-0 aspect-[1920/1080] border border-text-dark relative overflow-hidden grayscale-0 md:grayscale">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/me.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </CaseStudySection>
      </section>

      <Footer />
    </>
  );
}
