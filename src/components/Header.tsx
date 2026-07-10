export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone bg-bone/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-4 md:px-12"
      >
        <a
          href="#content"
          className="text-sm font-black uppercase tracking-[0.14em]"
        >
          TW
        </a>

        <div className="flex items-center gap-5 text-xs font-semibold uppercase sm:gap-8">
          <a className="nav-link" href="#work">
            Archive
          </a>
          <a className="nav-link" href="#standard">
            Standard
          </a>
          <a className="nav-link" href="#journal">
            Journal
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}