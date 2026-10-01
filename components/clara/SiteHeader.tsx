import Link from "next/link";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { MobileNav } from "./MobileNav";

export function SiteHeader({ isHomepage = false }: { isHomepage?: boolean }) {
  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Clara by Claritel home">
        <span className="site-brand__logo" aria-hidden="true" />
        <span>
          <strong>Clara</strong>
          <small>by Claritel</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav__desktop">
          <SlideTabs />
          <Link
            className="nav-cta nav-cta--secondary"
            href={isHomepage ? "#invitation" : "/#invitation"}
          >
            Book Demo
          </Link>
          <Link className="nav-cta" href={isHomepage ? "#invitation" : "/#invitation"}>
            Talk to Clara
          </Link>
        </div>
        <MobileNav isHomepage={isHomepage} />
      </nav>
    </header>
  );
}
