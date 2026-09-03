import FadeIn from "@/components/FadeIn";
import CaseStudySection from "@/components/CaseStudySection";

type ProjectSectionProps = {
  label: string;
  variant?: "first" | "middle";
  justify?: "between" | "start";
  children: React.ReactNode;
};

export default function ProjectSection({ label, variant = "middle", justify = "between", children }: ProjectSectionProps) {
  if (variant === "first") {
    return (
      <section className="w-full bg-background border-t border-text-dark md:min-h-screen px-s md:px-l pt-m pb-section flex flex-col">
        <div className="flex-1 flex flex-col">
          <FadeIn className="flex-1 flex flex-col">
            <CaseStudySection label={label} justify={justify}>
              {children}
            </CaseStudySection>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background md:min-h-screen px-s md:px-l pb-section flex flex-col">
      <div className="border-t border-text-dark pt-m flex-1 flex flex-col">
        <FadeIn className="flex-1 flex flex-col">
          <CaseStudySection label={label} justify={justify}>
            {children}
          </CaseStudySection>
        </FadeIn>
      </div>
    </section>
  );
}
