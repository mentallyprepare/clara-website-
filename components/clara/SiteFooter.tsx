import Link from "next/link";
import { siteTabs } from "@/lib/site-nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>Clara</strong>
          <small>by Claritel</small>
          <p>Voice · Website · WhatsApp — one playbook, across every channel.</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {siteTabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="site-footer__base">
        <span>© {new Date().getFullYear()} Claritel. All rights reserved.</span>
        <Link href="/#invitation" className="site-footer__cta">
          Talk to Clara
        </Link>
      </div>
    </footer>
  );
}
