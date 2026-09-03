type CaseStudySectionProps = {
  label: string;
  children: React.ReactNode;
  /** "between" (default) pushes two children to the top/bottom of the section.
   *  "start" stacks any number of children from the top with a consistent gap. */
  justify?: "between" | "start";
};

export default function CaseStudySection({ label, children, justify = "between" }: CaseStudySectionProps) {
  return (
    <div className="flex-1 grid content-start md:content-normal grid-cols-1 md:grid-cols-6 md:[grid-template-rows:1fr] gap-s md:gap-m w-full">
      <p className="text-style-label text-text-dark uppercase md:col-span-2 self-start md:sticky md:top-[120px]">
        {label}
      </p>
      <div className={`flex flex-col gap-xl w-full md:col-span-4 ${justify === "between" ? "justify-between" : "justify-start"}`}>
        {children}
      </div>
    </div>
  );
}
