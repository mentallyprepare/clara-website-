"use client";

import Timeline from "@/components/ui/timeline";

export function Approach() {
  return (
    <Timeline
      eyebrow="Our approach"
      title="We learn your business before we build your AI."
      subtitle="Our team turns your business requirements into a purpose-built AI agent, then tests and refines it around the conversations that matter."
      activeColor="var(--plum, var(--primary, #534b82))"
      textColor="var(--ink, var(--foreground, #1b1b3c))"
      mutedTextColor="var(--muted, var(--muted-foreground, #666776))"
      backgroundColor="var(--page-bg, var(--background, #f7f6fa))"
      imageUrl="/images/clara-workflow.webp"
      imageAlt="Clara workflow overview"
      duration={1.4}
    />
  );
}
