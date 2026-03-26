import SplitLayout from "../SplitLayout";

type Principle = {
  title: string;
  titleHighlight: string;
  highlightColour: string;
  paragraphs: string[];
};

type PhilosophySectionProps = {
  principles: Principle[];
};

export default function PhilosophySection({
  principles,
}: PhilosophySectionProps) {
  return (
    <section id="philosophy" className="w-full bg-background section-py">
      {/* Part 1 — Section heading */}
      <div className="px-s md:px-l">
        <h2
          className="text-text-dark"
          style={{ fontSize: "var(--section-heading-size, 120px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Philosophy
        </h2>
      </div>

      {/* Part 2 — Principles */}
      <div className="section-mt px-s md:px-l section-gap-y">
        {principles.map((principle, idx) => (
          <SplitLayout key={idx}>
            <div className="space-y-m">
              <p>
                <span className="text-style-project text-text-dark">
                  {principle.title}{" "}
                </span>
                <span
                  className="text-style-project-highlight"
                  style={{ color: principle.highlightColour }}
                >
                  {principle.titleHighlight}
                </span>
              </p>

              {principle.paragraphs.map((p, i) => (
                <p key={i} className="text-style-body-lg text-text-dark">
                  {p}
                </p>
              ))}
            </div>
          </SplitLayout>
        ))}
      </div>
    </section>
  );
}
