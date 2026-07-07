import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const selectedWork = [
  {
    code: "TW-S001",
    title: "Nord House",
    description: "Furniture for quieter living.",
    discipline: "Identity / Digital"
  },
  {
    code: "TW-S002",
    title: "Atlas Capital",
    description: "Recognition for a modern investment firm.",
    discipline: "Identity / Motion"
  },
  {
    code: "TW-S003",
    title: "Forma Studio",
    description: "Identity for an architectural practice.",
    discipline: "Identity / Systems"
  }
];

const standards = [
  "Clarity",
  "Craft",
  "Longevity",
  "Responsibility",
  "Structure",
  "Curiosity"
];

const objects = [
  { code: "TW-O001", title: "Architect Pen" },
  { code: "TW-O002", title: "Studio Notebook" },
  { code: "TW-O003", title: "Measure" }
];

const journal = [
  { code: "TW-J001", title: "Why Less Wins" },
  { code: "TW-J002", title: "Designing for Longevity" },
  { code: "TW-J003", title: "The Material Matters" }
];

function SectionHeader({
  eyebrow,
  title,
  id,
  children
}: {
  eyebrow: string;
  title: string;
  id: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-stone pt-5 md:grid-cols-12 md:gap-8">
      <p className="text-xs font-semibold uppercase text-muted md:col-span-2">
        {eyebrow}
      </p>
      <div className="md:col-span-7">
        <h2 className="text-3xl font-semibold leading-none text-carbon sm:text-5xl" id={id}>
          {title}
        </h2>
      </div>
      {children ? (
        <div className="text-sm leading-6 text-muted md:col-span-3">{children}</div>
      ) : null}
    </div>
  );
}

function EditorialRow({
  code,
  title,
  description,
  meta
}: {
  code: string;
  title: string;
  description?: string;
  meta?: string;
}) {
  return (
    <article className="group grid gap-4 border-t border-stone py-6 transition-colors duration-300 hover:border-carbon md:grid-cols-12 md:gap-8">
      <p className="text-xs font-semibold uppercase text-muted md:col-span-2">{code}</p>
      <h3 className="text-2xl font-semibold leading-tight text-carbon md:col-span-4 md:text-4xl">
        {title}
      </h3>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-carbon md:col-span-4">
          {description}
        </p>
      ) : null}
      {meta ? (
        <p className="text-xs font-semibold uppercase text-muted md:col-span-2 md:text-right">
          {meta}
        </p>
      ) : null}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-carbon">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-carbon focus:px-4 focus:py-3 focus:text-bone"
        href="#content"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-stone bg-bone/95 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto grid max-w-[1680px] grid-cols-2 items-center gap-4 px-5 py-4 text-xs font-semibold uppercase text-carbon sm:px-8 md:grid-cols-12 md:px-10"
        >
          <a className="md:col-span-3" href="#content">
            Tasty Wasp
          </a>
          <div className="hidden gap-6 md:col-span-6 md:flex">
            <a className="hover:text-ochre" href="#work">
              Work
            </a>
            <a className="hover:text-ochre" href="#standard">
              Standard
            </a>
            <a className="hover:text-ochre" href="#objects">
              Objects
            </a>
            <a className="hover:text-ochre" href="#journal">
              Journal
            </a>
          </div>
          <a className="justify-self-end hover:text-ochre md:col-span-3" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section
        aria-labelledby="hero-title"
        className="mx-auto grid min-h-[calc(100vh-57px)] max-w-[1680px] content-between gap-12 px-5 py-8 sm:px-8 md:grid-cols-12 md:px-10 md:py-12"
        id="content"
      >
        <div className="reveal md:col-span-12">
          <p className="mb-5 max-w-md text-sm font-semibold uppercase leading-6 text-muted">
            Independent branding studio. Identity / Motion / Digital.
          </p>
          <h1
            className="word-mask text-[4.25rem] font-black uppercase leading-[0.88] text-carbon sm:text-[6.75rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem]"
            id="hero-title"
          >
            <span>Tasty</span>
            <span>Wasp</span>
          </h1>
        </div>

        <div className="grid gap-8 md:col-span-12 md:grid-cols-12 md:items-end">
          <div className="line-extension reveal reveal-delay-1 md:col-span-5">
            <p className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              Designed to be remembered.
            </p>
          </div>
          <div className="reveal reveal-delay-2 md:col-span-3">
            <p className="max-w-sm text-base leading-7 text-muted">
              Build things worth keeping. Brands with fewer moving parts, better
              materials, and a clearer reason to stay.
            </p>
          </div>
          <figure className="reveal reveal-delay-3 md:col-span-4 md:justify-self-end">
            <Image
              alt="Tasty Wasp abstract studio mark"
              className="h-auto w-40 sm:w-52 md:w-64"
              height={360}
              priority
              src="/tasty-wasp-mark.svg"
              unoptimized
              width={360}
            />
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="reveal mx-auto max-w-[1680px] px-5 py-16 sm:px-8 md:px-10 md:py-24"
        id="work"
      >
        <SectionHeader eyebrow="Selected Work" id="work-title" title="Systems with restraint.">
          <p>
            Fictional studies for a first production release. Names, structure,
            and tone are ready to swap for live work.
          </p>
        </SectionHeader>
        <div className="mt-14">
          {selectedWork.map((work) => (
            <EditorialRow
              code={work.code}
              description={work.description}
              key={work.code}
              meta={work.discipline}
              title={work.title}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="standard-title"
        className="reveal mx-auto max-w-[1680px] px-5 py-16 sm:px-8 md:px-10 md:py-24"
        id="standard"
      >
        <SectionHeader eyebrow="The Standard" id="standard-title" title="Work that earns its place.">
          <p>
            Principles for making identity systems that hold up after the launch
            noise fades.
          </p>
        </SectionHeader>
        <div className="mt-14 grid border-t border-stone md:grid-cols-3">
          {standards.map((item, index) => (
            <article
              className="min-h-44 border-b border-stone py-6 md:border-r md:px-6 md:last:border-r-0"
              key={item}
            >
              <p className="text-xs font-semibold text-ochre">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-3xl font-semibold leading-none text-carbon">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="objects-title"
        className="reveal mx-auto max-w-[1680px] px-5 py-16 sm:px-8 md:px-10 md:py-24"
        id="objects"
      >
        <SectionHeader eyebrow="Objects" id="objects-title" title="Useful, quiet, exact.">
          <p>These are not merchandise. They are considered objects.</p>
        </SectionHeader>
        <div className="mt-14">
          {objects.map((object) => (
            <EditorialRow code={object.code} key={object.code} title={object.title} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="journal-title"
        className="reveal mx-auto max-w-[1680px] px-5 py-16 sm:px-8 md:px-10 md:py-24"
        id="journal"
      >
        <SectionHeader eyebrow="Journal" id="journal-title" title="Notes on keeping things sharp.">
          <p>Short essays on restraint, material choices, and brand memory.</p>
        </SectionHeader>
        <div className="mt-14">
          {journal.map((entry) => (
            <EditorialRow code={entry.code} key={entry.code} title={entry.title} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="reveal mx-auto max-w-[1680px] px-5 py-16 sm:px-8 md:px-10 md:py-24"
        id="contact"
      >
        <div className="grid gap-12 border-t border-stone pt-5 md:grid-cols-12 md:gap-8">
          <p className="text-xs font-semibold uppercase text-muted md:col-span-2">
            Contact
          </p>
          <div className="md:col-span-5">
            <h2 className="text-4xl font-semibold leading-none text-carbon sm:text-6xl" id="contact-title">
              Start something worth keeping.
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-muted">
              Tell us what you are building, what needs to last, and where the
              current identity is carrying too much noise.
            </p>
          </div>
          <div className="md:col-span-5">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto grid max-w-[1680px] gap-6 border-t border-stone px-5 py-8 text-xs font-semibold uppercase text-muted sm:px-8 md:grid-cols-12 md:px-10">
        <p className="md:col-span-3">Tasty Wasp</p>
        <p className="md:col-span-3">Identity / Motion / Digital</p>
        <p className="md:col-span-3">Build things worth keeping.</p>
        <a className="hover:text-ochre md:col-span-3 md:text-right" href="mailto:jonathanstephenson84@gmail.com">
          jonathanstephenson84@gmail.com
        </a>
      </footer>
    </main>
  );
}
