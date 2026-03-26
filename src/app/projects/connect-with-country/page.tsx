import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ProjectInfo from "@/components/ProjectInfo";

export default function ConnectWithCountryPage() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen">
        <Image src="/images/connect_with_country/hero.jpg" alt="Connect with Country" fill />
      </div>

      <div className="px-s md:px-l">
        <ProjectInfo
          title="Connect with Country"
          client="Mobile app"
          tags={["Web design", "Brand"]}
          paragraphs={[
            "A digital tool helping Australians offer meaningful Acknowledgements of Country, built in partnership with Traditional Owners and Custodians across NSW.",
            "Many Australians want to engage respectfully with First Nations culture, but sourcing trustworthy, nuanced information about Country, borders, and protocols is difficult, often resulting in inaction. The Connect with Country Tool addresses this directly, putting Traditional Owners in control of the information shared about their own Country and culture.",
            "Built with community, TAFE NSW, the NSW Government, and EY Future Friendly, the tool combines geo-location search, guided learning, and community-owned content through a flexible CMS. Traditional Owners approve and publish their own content; the public gains the knowledge to engage respectfully and go further.",
            "A proof of concept with a roadmap to scale nationally.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Image src="/images/connect_with_country/01.jpg" alt="Connect with Country 1" />
        <Image src="/images/connect_with_country/02.jpg" alt="Connect with Country 2" />
        <Image src="/images/connect_with_country/03.jpg" alt="Connect with Country 3" />
        <Image src="/images/connect_with_country/04.jpg" alt="Connect with Country 4" />
        <Image src="/images/connect_with_country/05.jpg" alt="Connect with Country 5" />
        <Image src="/images/connect_with_country/06.jpg" alt="Connect with Country 6" />
        <Image src="/images/connect_with_country/07.jpg" alt="Connect with Country 7" />
      </div>

      <Footer />
    </>
  );
}
