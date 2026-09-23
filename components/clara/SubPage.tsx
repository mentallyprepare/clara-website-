import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";

export type SubPageFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type SubPageProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  intro: string;
  features: readonly SubPageFeature[];
  ctaHeading: string;
  ctaSub: string;
};

export function SubPage({
  eyebrow,
  title,
  emphasis,
  intro,
  features,
  ctaHeading,
  ctaSub,
}: SubPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero relative overflow-hidden bg-[#fcfcfd] px-6 pb-16 pt-24 md:pt-28">
          {/* soft grid texture */}
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,#efeefb_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)]" />
          {/* plum halo */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_110%,rgba(252,252,253,0)_38%,rgba(83,75,130,0.28)_100%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#534b82]">
                {eyebrow}
              </p>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-[#1b1b3c] md:text-6xl">
                {title}
                {emphasis ? (
                  <>
                    {" "}
                    <span className="font-serif italic text-[#534b82]">
                      {emphasis}
                    </span>
                  </>
                ) : null}
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-[#61676b]">
                {intro}
              </p>
              <Link
                href="/#invitation"
                style={{ color: "#fff" }}
                className="inline-flex items-center gap-2 rounded-full bg-[#1b1b3c] px-6 py-3 text-sm font-medium transition-colors hover:bg-[#3e3868]"
              >
                Talk to Clara
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="subpage-grid bg-[#fcfcfd] px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#e6e4f2] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#c9c4ec] hover:shadow-[0_18px_40px_rgba(83,75,130,0.12)]">
                  <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#f0edff] text-[#534b82] shadow-sm shadow-[#b4b4ec]/40 transition-colors group-hover:bg-[#e1dcff]">
                    <f.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#1b1b3c]">
                    {f.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-[#61676b]">
                    {f.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="subpage-cta px-6 pb-24">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1b1b3c] px-8 py-16 text-center md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(180,180,236,0.35),transparent_60%)]" />
              <div className="relative">
                <h2 className="mx-auto mb-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {ctaHeading}
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-pretty text-base text-[#c8c6de]">
                  {ctaSub}
                </p>
                <Link
                  href="/#invitation"
                  style={{ color: "#1b1b3c" }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium transition-colors hover:bg-[#e1dcff]"
                >
                  Talk to Clara
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
