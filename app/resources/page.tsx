import type { Metadata } from "next";
import { BookOpen, Newspaper, GraduationCap, PlayCircle, FileText, LifeBuoy } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Resources · Clara by Claritel" };

export default function ResourcesPage() {
  return (
    <SubPage
      eyebrow="Resources"
      title="Everything you need to run Clara"
      emphasis="well."
      intro="Guides, stories and reference material to help your team design playbooks, set guardrails and measure what Clara resolves."
      features={[
        { icon: BookOpen, title: "Playbook guides", desc: "How to turn approved knowledge into answers Clara can trust." },
        { icon: GraduationCap, title: "Onboarding academy", desc: "Short lessons to get your team confident in a week." },
        { icon: Newspaper, title: "Blog", desc: "Notes on agentic support, evidence-led quality and handoffs." },
        { icon: PlayCircle, title: "Webinars", desc: "Live sessions and recordings on real deployments." },
        { icon: FileText, title: "Case studies", desc: "How teams shortened their queues without cutting corners." },
        { icon: LifeBuoy, title: "Help center", desc: "Answers to the practical questions, from setup to scaling." },
      ]}
      ctaHeading="Not sure where to start?"
      ctaSub="Tell us your use case and we'll point you to the right resources."
    />
  );
}
