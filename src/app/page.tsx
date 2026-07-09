import { ContactForm } from "@/components/ContactForm";

const editions = [
  {
    number: "001",
    code: "TW-S001",
    title: "Nord House",
    description: "Furniture for quieter living.",
    status: "Complete",
    href: "#contact",
    image: "/work/nord-house-board.png",
  },
  {
    number: "002",
    code: "TW-S002",
    title: "Atlas",
    description: "Financial clarity. Built on trust.",
    status: "Complete",
    href: "#contact",
    image: "/work/atlas-board.png",
  },
  {
    number: "003",
    code: "TW-S003",
    title: "Forma",
    description: "Architecture. Reimagined.",
    status: "In Development",
    href: "#contact",
    image: "/work/forma-board.png",
  },
];

const standards = [
  "Clarity",
  "Craft",
  "Longevity",
  "Responsibility",
  "Structure",
  "Curiosity",
];

const journal = [
  "Why Less Wins",
  "Building Brands Designed to be Remembered",
  "What Architecture Taught Us About Branding",
];

function EditionRow({ edition }: { edition: (typeof editions)[number] }) {
  return (
    <article className="group grid border-t border-stone md:min-h-[78vh] md:grid-cols-12">
      <div className="flex flex-col justify-between p-6 md:col-span-4 md:p-10">
        <div>
          <p className="text-[7rem] font-light leading-none tracking-[-0.08em] md:text-[12rem]">
            {edition.number}
          </p>

          <p className="mt-6 text-xs font-semibold uppercase text-muted">
            {edition.code}
          </p>

          <h2 className="mt-8 text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            {edition.title}
          </h2>

          <p className="mt-4 max-w-sm text-xl leading-snug text-muted">
            {edition.description}
          </p>
        </div>

        <a
          href={edition.href}
          className="mt-12 inline-flex w-fit items-center gap-4 border-b border-carbon pb-1 text-sm font-semibold uppercase transition-all duration-300 group-hover:gap-8 group-hover:text-ochre"
        >
          View Edition <span>→</span>
        </a>
      </div>

      <div className="relative min-h-[42vh] overflow-hidden bg-carbon p-5 md:col-span-6 md:min-h-[78vh] md:p-10">
        <img
          src={edition.image}
          alt={`${edition.title} brand presentation by Tasty Wasp`}
          className="block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.025] md:h-full md:max-h-[calc(78vh-5rem)]"
        />
      </div>

      <div className="flex flex-col justify-center border-t border-stone p-6 md:col-span-2 md:border-l md:border-t-0 md:p-10">
        <p className="text-xs font-semibold uppercase text-muted">Status</p>
        <p className="mt-3 text-xl">{edition.status}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-carbon">
      <header className="fixed left-0 top-0 z-50 hidden h-screen w-[260px] flex-col justify-between border-r border-stone bg-carbon p-8 text-bone lg:flex">
        <div>
          <a
            href="#content"
            className="block text-3xl font-semibold uppercase leading-none tracking-[0.18em]"
          >
            Tasty
            <br />
            Wasp
          </a>

          <p className="mt-10 max-w-[12rem] text-sm leading-6 text-bone/70">
            Building brands designed to be remembered.
          </p>

          <nav className="mt-20 space-y-8 text-sm">
            <a
              className="block border-t border-bone/20 pt-6 hover:text-ochre"
              href="#work"
            >
              01 Archive
            </a>
            <a
              className="block border-t border-bone/20 pt-6 hover:text-ochre"
              href="#standard"
            >
              02 The Standard
            </a>
            <a
              className="block border-t border-bone/20 pt-6 hover:text-ochre"
              href="#journal"
            >
              03 Journal
            </a>
            <a
              className="block border-t border-bone/20 pt-6 hover:text-ochre"
              href="#contact"
            >
              04 Contact
            </a>
          </nav>
        </div>

        <div className="space-y-6 text-xs text-bone/70">
          <p>Chichester, West Sussex</p>
          <p>Working across the UK</p>
          <p>TW-D001 / Edition 2.0</p>
        </div>
      </header>

      <div className="lg:pl-[260px]">
        <section
          id="content"
          className="grid min-h-screen content-between px-6 py-8 md:px-12 md:py-12"
        >
          <div className="flex items-start justify-between">
            <p className="text-xs font-semibold uppercase text-muted">
              TW-H001
            </p>
            <p className="text-xs font-semibold uppercase text-muted">
              Edition 2.0
            </p>
          </div>

          <div>
            <h1 className="word-mask text-[5rem] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[8rem] md:text-[12rem] xl:text-[17rem]">
              <span>Tasty</span>
              <span>Wasp</span>
            </h1>

            <p className="mt-10 max-w-2xl text-4xl leading-none tracking-[-0.04em] md:text-7xl">
              Building brands designed to be remembered.
            </p>
          </div>

          <div className="grid gap-8 border-t border-stone pt-6 md:grid-cols-3">
            <p className="text-sm text-muted">
              Independent branding studio based in Chichester, West Sussex.
            </p>
            <p className="text-sm text-muted">
              Identity / Digital / Motion / Design Systems.
            </p>
            <p className="text-sm text-muted md:text-right">
              Scroll to explore ↓
            </p>
          </div>
        </section>

        <section id="work">
          {editions.map((edition) => (
            <EditionRow key={edition.code} edition={edition} />
          ))}
        </section>

        <section
          id="standard"
          className="bg-carbon px-6 py-24 text-bone md:px-12 md:py-32"
        >
          <p className="text-xs font-semibold uppercase text-bone/50">
            The Standard
          </p>

          <h2 className="mt-10 max-w-5xl text-6xl font-medium leading-none tracking-[-0.06em] md:text-9xl">
            Our approach to every edition.
          </h2>

          <div className="mt-20 grid border-t border-bone/20 md:grid-cols-3">
            {standards.map((item, index) => (
              <div
                key={item}
                className="border-b border-bone/20 py-10 md:border-r md:px-8"
              >
                <p className="text-xs text-bone/50">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-10 text-4xl tracking-[-0.04em]">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="px-6 py-24 md:px-12 md:py-32">
          <p className="text-xs font-semibold uppercase text-muted">Journal</p>

          <h2 className="mt-10 max-w-4xl text-6xl leading-none tracking-[-0.06em] md:text-8xl">
            Thoughts on design, identity and intention.
          </h2>

          <div className="mt-20 border-t border-stone">
            {journal.map((title, index) => (
              <article
                key={title}
                className="grid border-b border-stone py-8 md:grid-cols-12"
              >
                <p className="text-xs font-semibold uppercase text-muted md:col-span-2">
                  TW-J00{index + 1}
                </p>
                <h3 className="mt-4 text-4xl tracking-[-0.04em] md:col-span-8 md:mt-0">
                  {title}
                </h3>
                <p className="mt-4 text-sm uppercase md:col-span-2 md:mt-0 md:text-right">
                  Read →
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-stone px-6 py-24 md:px-12 md:py-32"
        >
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-xs font-semibold uppercase text-muted">
                Contact
              </p>
              <h2 className="mt-10 text-6xl leading-none tracking-[-0.06em] md:text-8xl">
                Start something worth keeping.
              </h2>
            </div>

            <div className="md:col-span-6">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="grid gap-6 border-t border-stone px-6 py-8 text-xs uppercase text-muted md:grid-cols-4 md:px-12">
          <p>Tasty Wasp</p>
          <p>Chichester, West Sussex</p>
          <p>Working across the UK</p>
          <a
            href="https://www.linkedin.com/company/tasty-wasp/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn →
          </a>
        </footer>
      </div>
    </main>
  );
}