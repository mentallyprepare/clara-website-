export type ClaraSectionId =
  | "hero"
  | "after-hello"
  | "operating-system"
  | "everyday-work"
  | "approach"
  | "claralens"
  | "invitation";

export type ClaraSection = {
  id: ClaraSectionId;
  heading: string;
  summary: string;
};

export type NavigationItem = {
  label: string;
  href: `#${ClaraSectionId}`;
};

export const claraSections: readonly ClaraSection[] = [
  {
    id: "hero",
    heading: "You have conversations to handle. I'll take care of them.",
    summary:
      "Clara is Claritel's agentic AI for calls, your website and WhatsApp.",
  },
  {
    id: "after-hello",
    heading: "AI can answer a call. That doesn’t mean it can handle your business.",
    summary:
      "Handling a conversation takes context, the ability to act and the judgment to know when a human should step in.",
  },
  {
    id: "operating-system",
    heading: "A prompt does not know how your business works.",
    summary:
      "Connect the conversation to approved knowledge, tools and people.",
  },
  {
    id: "everyday-work",
    heading: "Small moments become completed work.",
    summary:
      "Let routine work move while your team stays close to the moments that need judgment.",
  },
  {
    id: "approach",
    heading: "Start with the number you need to move.",
    summary:
      "Begin with one workflow and expand only after the evidence is clear.",
  },
  {
    id: "claralens",
    heading: "Every score should be able to show its work.",
    summary:
      "ClaraLens ties each result to the exact conversation evidence behind it.",
  },
  {
    id: "invitation",
    heading: "Bring us one conversation worth fixing.",
    summary:
      "Try Clara in the browser or bring a workflow to the team behind her.",
  },
] as const;

export const navigationItems: readonly NavigationItem[] = [
  { label: "How it works", href: "#after-hello" },
  { label: "ClaraLens", href: "#claralens" },
  { label: "Talk to Clara", href: "#invitation" },
] as const;
