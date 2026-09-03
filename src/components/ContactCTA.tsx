import CtaButton from "@/components/CtaButton";

type ContactCTAProps = { variant: "section" | "page" };

export default function ContactCTA({ variant }: ContactCTAProps) {
  return (
    <>
      <div className="max-w-col-4 w-full flex flex-col gap-xl items-center">
        <div className="max-w-col-3 w-full flex flex-col gap-m items-center text-center">
          {variant === "page" ? (
            <h1 className="text-style-h1 text-text-dark">Let&rsquo;s chat.</h1>
          ) : (
            <h2 className="text-style-h2 text-text-dark">Let&rsquo;s chat.</h2>
          )}
          <p className={`${variant === "page" ? "text-style-subtitle" : "text-style-body"} text-text-dark-secondary`}>
            Book a 30-minute call. Just tell me the problem and I&rsquo;ll tell you if I can help.
          </p>
        </div>

        <CtaButton href="https://zcal.co/alexmoffatt/30min" className="inline-flex justify-center w-[293px]">
          Book a call
        </CtaButton>
      </div>

      <p className="text-style-small text-text-dark text-center">
        Prefer to write first?{" "}
        <a href="mailto:alexmoffatt92@gmail.com" className="underline hover:opacity-70 transition-opacity duration-200">
          Email me
        </a>{" "}
        instead
      </p>
    </>
  );
}
