"use client";

import Timeline from "@/components/ui/timeline";

export function Approach() {
  return (
    <Timeline
      eyebrow="Our approach"
      title="We learn your business before we build your AI."
      subtitle="Our team turns your business requirements into a purpose-built AI agent, then tests and refines it around the conversations that matter."
      activeColor="#b4b4ec"
      textColor="#ffffff"
      mutedTextColor="#a1a1aa"
      backgroundColor="#1b1b3c"
      imageUrl="/images/clara-workflow.webp"
      imageAlt="Clara workflow overview"
      duration={1.4}
    />
  );
}
