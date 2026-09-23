import type { Metadata } from "next";
import { ShoppingBag, Landmark, HeartPulse, Truck, GraduationCap, Building2 } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Solutions · Clara by Claritel" };

export default function SolutionsPage() {
  return (
    <SubPage
      eyebrow="Solutions"
      title="Built for the work your team"
      emphasis="repeats."
      intro="Clara fits the operations you already run — clearing the routine so your people spend their time on the conversations that actually need them."
      features={[
        { icon: ShoppingBag, title: "Retail & e-commerce", desc: "Order changes, delivery questions and returns, handled before dispatch." },
        { icon: Landmark, title: "Financial services", desc: "Account questions answered from approved policy, with a clean human handoff." },
        { icon: HeartPulse, title: "Healthcare", desc: "Scheduling and intake that respects privacy and escalates when it should." },
        { icon: Truck, title: "Logistics", desc: "Live status and rescheduling across voice, web and WhatsApp." },
        { icon: GraduationCap, title: "Education", desc: "Admissions and support queries answered from your own materials." },
        { icon: Building2, title: "Enterprise support", desc: "One playbook across every channel, with evidence behind every answer." },
      ]}
      ctaHeading="Find your workflow in Clara."
      ctaSub="Tell us the queue that never gets shorter — we'll show you how Clara clears it."
    />
  );
}
