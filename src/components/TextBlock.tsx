export default function TextBlock({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-m max-w-col-3 text-style-body text-text-dark">{children}</div>;
}
