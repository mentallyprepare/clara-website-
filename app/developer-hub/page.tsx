import type { Metadata } from "next";
import { Code2, Webhook, KeyRound, TerminalSquare, BookOpen, GitBranch } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Developer Hub · Clara by Claritel" };

export default function DeveloperHubPage() {
  return (
    <SubPage
      eyebrow="Developer Hub"
      title="Wire Clara into your"
      emphasis="stack."
      intro="A clean API, typed SDKs and webhooks that fit how you already build. Bring Clara your tools and your data — she works within the rules you define."
      features={[
        { icon: Code2, title: "REST & streaming API", desc: "Predictable endpoints for conversations, actions and transcripts." },
        { icon: TerminalSquare, title: "Typed SDKs", desc: "First-class TypeScript and Python clients with sensible defaults." },
        { icon: Webhook, title: "Webhooks", desc: "Real-time events for handoffs, resolutions and audit entries." },
        { icon: KeyRound, title: "Scoped keys", desc: "Granular permissions that mirror what Clara is allowed to do." },
        { icon: GitBranch, title: "Versioned playbooks", desc: "Ship knowledge changes with review, rollback and history." },
        { icon: BookOpen, title: "Guides & references", desc: "Copy-paste examples that get you to a working call in minutes." },
      ]}
      ctaHeading="Start building with Clara."
      ctaSub="Get an API key and run your first grounded conversation today."
    />
  );
}
