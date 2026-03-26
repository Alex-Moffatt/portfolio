import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function GamingForGoodPage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/gaming_for_good/hero.jpg" alt="Gaming For Good" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Gaming For Good"
          summary="Helping streamers raise money for causes they care about"
          tags={["Experience design", "Strategy", "Marketing", "Analytics", "Business modelling"]}
          paragraphs={[
            "A gaming and streaming fundraising programme built for the British Red Cross, launched in April 2020 to reach a new generation of supporters through Twitch and YouTube Gaming.",
            "Gaming is a largely untapped market for charities, bigger than film and music combined. The opportunity: find streamers who care about the cause and let them do the work. The BRC had a genuine USP: unlike most charities running fixed annual events, they could launch campaigns rapidly around live emergencies.",
            "Four campaigns. £350k raised on a £174k spend. 6,000 gamers recruited at £26 cost per acquisition. Operation Beirut raised £60k with zero marketing budget. Operation Anti-Loneliness topped £100k during the second lockdown.",
            "The result: a full-time Gaming and Streaming lead hired to scale the programme.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <FadeIn><Image src="/images/gaming_for_good/01.jpg" alt="Gaming For Good 1" /></FadeIn>
        <FadeIn><Image src="/images/gaming_for_good/02.jpg" alt="Gaming For Good 2" /></FadeIn>
        <FadeIn><Image src="/images/gaming_for_good/03.jpg" alt="Gaming For Good 3" /></FadeIn>
        <FadeIn><Image src="/images/gaming_for_good/04.jpg" alt="Gaming For Good 4" /></FadeIn>
        <FadeIn><Image src="/images/gaming_for_good/05.jpg" alt="Gaming For Good 5" /></FadeIn>
      </div>

      <Footer />
    </>
  );
}
