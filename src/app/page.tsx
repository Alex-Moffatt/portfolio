export default function Home() {
  return (
    <main className="p-section max-md:p-[64px]">
      {/* Design tokens test */}
      <h1 className="font-heading text-hero text-text-dark mb-m">
        Design Tokens
      </h1>
      <p className="font-body text-body-lg text-text-dark-secondary mb-l">
        Fonts, colours, and spacing are configured.
      </p>

      {/* Colour swatches */}
      <div className="flex flex-wrap gap-s mb-xl">
        <div className="w-xl h-xl rounded-s bg-accent-1" title="accent-1" />
        <div className="w-xl h-xl rounded-s bg-accent-2" title="accent-2" />
        <div className="w-xl h-xl rounded-s bg-accent-3" title="accent-3" />
        <div className="w-xl h-xl rounded-s bg-accent-4" title="accent-4" />
        <div className="w-xl h-xl rounded-s bg-accent-5" title="accent-5" />
      </div>

      {/* Type scale */}
      <div className="space-y-m">
        <p className="font-heading text-hero">Hero — 60px</p>
        <p className="font-heading text-section leading-none">Section</p>
        <p className="font-heading text-project">Project — 30px</p>
        <p className="font-body text-body-lg">Body Large — 18px</p>
        <p className="font-body text-body-md">Body Medium — 16px</p>
        <p className="font-body text-body-sm text-text-dark-secondary">
          Body Small — 14px
        </p>
      </div>
    </main>
  );
}
