import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function BaselinePage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/baseline/hero.jpg" alt="Baseline" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Baseline"
          summary="Supporting men in relationships to quit porn"
          tags={["App design", "Brand", "Strategy", "AI development", "Marketing", "Analytics", "Business modelling"]}
          paragraphs={[
            "A mobile app helping men in relationships address problematic pornography use, built independently from scratch using React Native, Expo, and Supabase.",
            "Most existing resources treat pornography use as binary: you either have an addiction or you don't. Baseline takes a different approach. Built around harm reduction and behaviour change theory, the app guides users through four progressive stages — Reset, Rebuild, Reconnect, and Sustain — focusing on progress over perfection and removing shame from the process.",
            "The app includes personalised onboarding, daily check-ins, a crisis toolkit for moments of struggle, rich content across multiple formats, and a stats system tracking consistency, momentum, and resilience. A paywall model funds ongoing development.",
            "Designed, built, and shipped as a solo founder: from database schema and auth to product design and go-to-market.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="/images/baseline/01.jpg" alt="Baseline 1" />
        <Image src="/images/baseline/02.jpg" alt="Baseline 2" />
        <Image src="/images/baseline/03.jpg" alt="Baseline 3" />
        <Image src="/images/baseline/04.jpg" alt="Baseline 4" />
        <Image src="/images/baseline/05.jpg" alt="Baseline 5" />
        <Image src="/images/baseline/06.jpg" alt="Baseline 6" />
      </div>

      <Footer />
    </>
  );
}
