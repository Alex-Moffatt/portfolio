import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function BankwestPage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/bankwest/hero.jpg" alt="Bankwest" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Bankwest website"
          summary="Launching a new bankwest.com.au"
          tags={["Web design", "Brand", "Strategy"]}
          paragraphs={[
            "A redesign of bankwest.com.au, aimed at helping Australians make confident decisions about their money. Banking has long left customers feeling overwhelmed, struggling to compare products, understand fees, and assess what's right for their situation.",
            "The new site reorganises Bankwest's offering around four core customer needs: Spend, Save, Borrow, Support. Interactive comparison tools let customers weigh up products side by side. Personalised calculators surface the numbers that actually matter to them. Navigation, search, and contextual help reduce friction at every step.",
            "Built for digital natives: animations and interactions bring the experience to life without sacrificing speed or security. Delivered through 50 hours of customer testing across iterative prototypes, validating every major decision before it shipped.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <FadeIn><Image src="/images/bankwest/01.jpg" alt="Bankwest 1" /></FadeIn>
        <FadeIn><Image src="/images/bankwest/02.jpg" alt="Bankwest 2" /></FadeIn>
        <FadeIn><Image src="/images/bankwest/03.jpg" alt="Bankwest 3" /></FadeIn>
        <FadeIn><Image src="/images/bankwest/04.jpg" alt="Bankwest 4" /></FadeIn>
        <FadeIn><Image src="/images/bankwest/05.jpg" alt="Bankwest 5" /></FadeIn>
        <FadeIn><Image src="/images/bankwest/06.jpg" alt="Bankwest 6" /></FadeIn>
      </div>

      <Footer />
    </>
  );
}
