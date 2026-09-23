import type { Metadata } from "next";
import { ShieldCheck, Lock, FileCheck2, Globe2, Eye, UserRoundCheck } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Trust · Clara by Claritel" };

export default function TrustPage() {
  return (
    <SubPage
      eyebrow="Trust"
      title="No black box. Every answer has a"
      emphasis="source."
      intro="Clara is built for teams that have to stand behind every reply. Evidence, permissions and audit trails are the default — not an upgrade."
      features={[
        { icon: FileCheck2, title: "Evidence-led quality", desc: "ClaraLens ties each result to the exact conversation evidence behind it." },
        { icon: ShieldCheck, title: "Permission to act", desc: "The tools Clara may use — and the point where she must stop." },
        { icon: UserRoundCheck, title: "Named fallback", desc: "The right person receives the conversation with its context intact." },
        { icon: Lock, title: "Encryption everywhere", desc: "Data protected in transit and at rest, end to end." },
        { icon: Globe2, title: "Data residency", desc: "Keep data in the region your compliance team requires." },
        { icon: Eye, title: "Full audit trail", desc: "Every action Clara takes is logged, reviewable and exportable." },
      ]}
      ctaHeading="Review Clara with your security team."
      ctaSub="We'll walk through the controls, the evidence model and the audit trail."
    />
  );
}
