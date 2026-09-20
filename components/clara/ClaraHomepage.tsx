import { navigationItems } from "@/lib/clara-content";
import { Hero } from "./sections/Hero";

function ClaraMark() {
  return (
    <span className="clara-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <i />
    </span>
  );
}

export function ClaraHomepage() {
  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="#hero" aria-label="Clara by Claritel home">
          <ClaraMark />
          <span>
            <strong>Clara</strong>
            <small>by Claritel</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              className={item.label === "Talk to Clara" ? "nav-cta" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <Hero />
        <div aria-hidden="true" id="after-hello" />
        <div aria-hidden="true" id="claralens" />
        <div aria-hidden="true" id="invitation" />
      </main>
    </>
  );
}
