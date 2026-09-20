import { navigationItems } from "@/lib/clara-content";
import { AfterHello } from "./sections/AfterHello";
import { Approach } from "./sections/Approach";
import { ClaraLens } from "./sections/ClaraLens";
import { EverydayWork } from "./sections/EverydayWork";
import { Hero } from "./sections/Hero";
import { Invitation } from "./sections/Invitation";
import { OperatingSystem } from "./sections/OperatingSystem";

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
        <AfterHello />
        <OperatingSystem />
        <EverydayWork />
        <Approach />
        <ClaraLens />
        <Invitation />
      </main>
    </>
  );
}
