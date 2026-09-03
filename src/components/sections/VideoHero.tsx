export default function VideoHero({ src, children }: { src: string; children: React.ReactNode }) {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-var(--header-height))] flex flex-col">
      <div className="relative w-full flex-1 border-b border-text-dark overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale">
          <source src={src} type="video/mp4" />
        </video>
      </div>

      {children}
    </section>
  );
}
