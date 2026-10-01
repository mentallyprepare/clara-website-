export type SiteTab = {
  label: string;
  href: string;
};

export const siteTabs: readonly SiteTab[] = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Integrations", href: "/integrations" },
  { label: "Company", href: "/company" },
] as const;

export const footerTabs: readonly SiteTab[] = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Developer Hub", href: "/developer-hub" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trust", href: "/trust" },
  { label: "Resources", href: "/resources" },
  { label: "Integrations", href: "/integrations" },
  { label: "Company", href: "/company" },
] as const;
