import Link from "next/link";
import { SlideTabs } from "@/components/ui/slide-tabs";

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

export function SiteHeader({ isHomepage = false }: { isHomepage?: boolean }) {
  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Clara by Claritel home">
        <ClaraMark />
        <span>
          <strong>Clara</strong>
          <small>by Claritel</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <SlideTabs />
        <Link className="nav-cta" href={isHomepage ? "#invitation" : "/#invitation"}>
          Talk to Clara
        </Link>
      </nav>
    </header>
  );
}
