import Link from "next/link";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { MobileNav } from "./MobileNav";

export function SiteHeader({ isHomepage = false }: { isHomepage?: boolean }) {
  return (
    <header className="site-header">
      <div className="site-header__pill">
        <Link className="site-brand" href="/" aria-label="Clara by Claritel home">
          <img
            src="/On_light.svg"
            alt="Clara by Claritel"
            className="site-brand__img"
          />
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
            <Link
              className="nav-cta"
              href={isHomepage ? "#invitation" : "/#invitation"}
            >
              Talk to Clara
            </Link>
          </div>
          <MobileNav isHomepage={isHomepage} />
        </nav>
      </div>
    </header>
  );
}
