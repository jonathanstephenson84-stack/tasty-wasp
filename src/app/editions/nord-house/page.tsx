import Link from "next/link";

export default function NordHousePage() {
  return (
    <main className="min-h-screen bg-bone text-carbon">
      <header className="border-b border-stone px-6 py-4 md:px-12">
        <Link href="/" className="text-sm font-black uppercase">
          TW
        </Link>
      </header>


      <section className="px-6 py-24 md:px-12">
  <p className="text-xs font-semibold uppercase text-muted">
    Edition 001
  </p>

  <h1 className="mt-8 text-[clamp(5rem,16vw,15rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">
    Nord
    <br />
    House
  </h1>

  <p className="mt-12 max-w-3xl text-[clamp(2rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]">
    Furniture for quieter living.
  </p>

  <div className="mt-20 overflow-hidden bg-carbon p-4 md:p-8">
    <img
      src="/work/nord-house/nord-house-board.png"
      alt="Nord House"
      className="w-full h-auto object-contain"
    />
  </div>
</section>

    </main>
  );
}