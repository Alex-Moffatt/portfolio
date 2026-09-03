import TextBlock from "@/components/TextBlock";

export default function SectionIntro({ heading, children }: { heading: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-m max-w-col-3">
      <p className="text-style-subtitle text-text-dark">{heading}</p>
      <TextBlock>{children}</TextBlock>
    </div>
  );
}
