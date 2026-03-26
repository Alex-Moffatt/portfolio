type SplitLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SplitLayout({ children, className }: SplitLayoutProps) {
  return (
    <div className={`md:flex ${className ?? ""}`}>
      <div className="hidden md:block md:w-1/2" />
      <div className="w-full md:w-1/2">{children}</div>
    </div>
  );
}
