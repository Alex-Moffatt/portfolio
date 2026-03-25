type ProjectInfoProps = {
  title: string;
  client: string;
  tags: string[];
  paragraphs: string[];
};

export default function ProjectInfo({
  title,
  client,
  tags,
  paragraphs,
}: ProjectInfoProps) {
  return (
    <div className="md:flex py-section">
      {/* Left column — empty (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2" />

      {/* Right column — content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-style-project text-text-dark">{title}</h2>
        <p className="text-style-body-sm text-text-dark-secondary mt-xs">{client}</p>

        <div className="mt-m space-y-m">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-style-body-lg text-text-dark">{p}</p>
          ))}
        </div>

        <div className="flex gap-s mt-m">
          {tags.map((tag, i) => (
            <span key={i} className="text-style-body-sm text-text-dark-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
