import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="w-full bg-white min-h-[747px] px-s md:px-l pt-section pb-xl flex flex-col items-center justify-center gap-xl">
        <ContactCTA variant="page" />
      </section>

      <Footer />
    </>
  );
}
