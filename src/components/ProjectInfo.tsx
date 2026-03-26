import SplitLayout from "./SplitLayout";

type ProjectInfoProps = {
  title: string;
  summary: string;
  tags: string[];
  paragraphs: string[];
};

export default function ProjectInfo({
  title,
  summary,
  tags,
  paragraphs,
}: ProjectInfoProps) {
  return (
    <SplitLayout className="section-py">
      <h2 className="text-style-project text-text-dark">{title}</h2>
      <p className="text-style-body-sm text-text-dark-secondary mt-xs">{summary}</p>

      <div className="mt-m space-y-m">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-style-body-md text-text-dark">{p}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-s mt-m">
        {tags.map((tag, i) => (
          <span key={i} className="text-style-body-sm text-text-dark-secondary whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </SplitLayout>
  );
}
