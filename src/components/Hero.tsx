export default function Hero() {
  return (
    <section
      id="content"
      className="mx-auto grid min-h-[calc(100vh-57px)] max-w-[1680px] content-between px-6 py-8 md:px-12 md:py-12"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase text-muted">
          Independent Branding Studio
        </p>

        <p className="hidden text-xs font-semibold uppercase text-muted sm:block">
          Chichester, West Sussex
        </p>
      </div>

      <div className="py-20">
        <h1 className="word-mask text-[5rem] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[18rem]">
          <span>Tasty</span>
          <span>Wasp</span>
        </h1>

        <p className="mt-12 max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
          Building brands designed to be remembered.
        </p>
      </div>

      <div className="grid gap-5 border-t border-stone pt-5 text-sm text-muted sm:grid-cols-2">
        <p>
          Identity, digital experiences, motion and design systems.
        </p>

        <p className="sm:text-right">Scroll to explore ↓</p>
      </div>
    </section>
  );
}