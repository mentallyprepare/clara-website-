import {
  Coffee,
  Globe2,
  ListChecks,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Reveal } from "@/components/clara/Reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShoppingBag,
    channel: "Order · 9:14 AM",
    title: "Caught in time.",
    desc: "“Can I change the delivery address?” Updated before dispatch — no missed package, no callback needed.",
  },
  {
    icon: Globe2,
    channel: "Website · 10:02 AM",
    title: "Answered from the playbook.",
    desc: "“Does this plan work for 50 people?” Handled from your approved pricing — never a made-up number.",
  },
  {
    icon: MessageCircle,
    channel: "WhatsApp · 10:26 AM",
    title: "Handed off, gently.",
    desc: "“I’d rather speak to someone.” Priya picks up with the whole conversation already in view.",
  },
  {
    icon: Coffee,
    channel: "Morning Receipt",
    title: "Done before the second coffee.",
    desc: "Three questions handled. One handed off. No copying notes, no chasing context, no dashboard theatre.",
    highlight: true,
  },
  {
    icon: ListChecks,
    channel: "Meanwhile, at the team table",
    title: "The queue got shorter.",
    desc: "The team keeps moving. Clara clears the routine so the exceptions get real attention.",
  },
] as const;

type Feature = (typeof features)[number];

export const FeatureHero = () => {
  return (
    <section
      id="everyday-work"
      className="story-section everyday-work relative overflow-hidden bg-[#fcfcfd] px-6 py-24"
    >
      {/* soft grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,#efeefb_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)]" />
      {/* plum halo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_110%,rgba(252,252,253,0)_38%,rgba(83,75,130,0.28)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-[#534b82]">
            A very ordinary morning
          </p>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-[#1b1b3c] md:text-5xl">
            Some work should simply{" "}
            <span className="font-serif italic text-[#534b82]">disappear.</span>
          </h2>
          <p className="mx-auto mb-20 max-w-2xl text-pretty text-lg text-[#61676b]">
            Not every customer question needs a journey. Clara handles the
            routine ones and makes the exceptions easy for a person to pick up.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={f.title} delay={i * 80} {...f} />
          ))}

          <div className="flex flex-col justify-center gap-x-12 gap-y-16 md:col-span-3 md:flex-row">
            {features.slice(3).map((f, i) => (
              <div key={f.title} className="flex md:w-1/3">
                <FeatureCard delay={240 + i * 80} {...f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = Feature & { delay?: number };

const FeatureCard = ({
  icon: Icon,
  channel,
  title,
  desc,
  highlight,
  delay = 0,
}: FeatureCardProps) => (
  <Reveal
    delay={delay}
    className={cn(
      "group flex w-full flex-col items-center text-center transition-all duration-200",
    )}
  >
    <div
      className={cn(
        "mx-auto mb-6 flex size-12 items-center justify-center rounded-full transition-colors duration-200",
        "bg-[#f0edff] text-[#534b82] shadow-sm shadow-[#b4b4ec]/40 group-hover:bg-[#e1dcff]",
      )}
    >
      <Icon className="size-6" strokeWidth={1.75} />
    </div>
    <p className="mb-2 flex min-h-8 items-end justify-center text-[11px] font-semibold uppercase leading-4 tracking-[0.18em] text-[#7a7a95]">
      {channel}
    </p>
    <h3 className="mb-3 flex min-h-14 items-start justify-center text-xl font-semibold leading-7 tracking-tight text-[#1b1b3c]">
      {title}
    </h3>
    <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-[#61676b]">
      {desc}
    </p>
  </Reveal>
);

export default FeatureHero;
