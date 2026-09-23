import type { Metadata } from "next";
import { Phone, Globe2, MessageCircle, BookOpenCheck, Database, ShieldCheck } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Product · Clara by Claritel" };

export default function ProductPage() {
  return (
    <SubPage
      eyebrow="The product"
      title="One agent, every"
      emphasis="conversation."
      intro="Clara answers on voice, website and WhatsApp — working from your playbook, reading the customer record, and knowing exactly when a person should take over."
      features={[
        { icon: Phone, title: "Voice that resolves", desc: "Natural calls that complete the next approved step, not just deflect the question." },
        { icon: Globe2, title: "Website chat", desc: "On-page answers grounded in your approved knowledge, with no made-up numbers." },
        { icon: MessageCircle, title: "WhatsApp", desc: "Async conversations that keep full context and hand off cleanly to a human." },
        { icon: BookOpenCheck, title: "Works from your playbook", desc: "Every reply is traceable to a source — sourced, not generated." },
        { icon: Database, title: "Reads the record", desc: "CRM history and account state pulled in before the first sentence." },
        { icon: ShieldCheck, title: "Bounded by rules", desc: "Clear permissions for what Clara can do, and a named human fallback." },
      ]}
      ctaHeading="See Clara handle a real conversation."
      ctaSub="Bring us one workflow worth fixing and watch it resolve end to end."
    />
  );
}
