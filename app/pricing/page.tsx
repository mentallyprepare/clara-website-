import type { Metadata } from "next";
import { Sparkles, Building2, Rocket, Gauge, Users, ShieldCheck } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Pricing · Clara by Claritel" };

export default function PricingPage() {
  return (
    <SubPage
      eyebrow="Pricing"
      title="Pay for outcomes, not"
      emphasis="seats."
      intro="Simple plans that scale with the conversations Clara resolves. Start with one workflow, expand across every channel when you're ready."
      features={[
        { icon: Rocket, title: "Starter", desc: "One channel, one playbook. Perfect for a first workflow worth fixing." },
        { icon: Sparkles, title: "Growth", desc: "Voice, website and WhatsApp together, with shared knowledge." },
        { icon: Building2, title: "Enterprise", desc: "Dedicated support, data residency and custom guardrails." },
        { icon: Gauge, title: "Usage that's clear", desc: "Transparent per-resolution pricing — no surprise overages." },
        { icon: Users, title: "Unlimited human seats", desc: "Your whole team can pick up handoffs at no extra cost." },
        { icon: ShieldCheck, title: "Included compliance", desc: "Audit trails and evidence on every plan, not an add-on." },
      ]}
      ctaHeading="Get a quote for your workflow."
      ctaSub="Tell us your volumes and channels — we'll size the right plan with you."
    />
  );
}
