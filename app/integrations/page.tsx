import type { Metadata } from "next";
import { Plug, Database, MessageSquare, Workflow, Boxes, CalendarClock } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Integrations · Clara by Claritel" };

export default function IntegrationsPage() {
  return (
    <SubPage
      eyebrow="Integrations"
      title="Clara plugs into the tools you already"
      emphasis="run."
      intro="Connect your CRM, helpdesk and channels so Clara reads the record, takes approved actions, and hands off with full context."
      features={[
        { icon: Database, title: "CRM", desc: "Salesforce, HubSpot and more — account state in every conversation." },
        { icon: MessageSquare, title: "Helpdesk", desc: "Zendesk, Freshdesk and Intercom for clean ticket handoffs." },
        { icon: Plug, title: "Channels", desc: "Voice, website widgets and WhatsApp Business, out of the box." },
        { icon: Workflow, title: "Automation", desc: "Trigger approved actions in your existing workflow tools." },
        { icon: CalendarClock, title: "Scheduling", desc: "Book, reschedule and confirm without leaving the conversation." },
        { icon: Boxes, title: "Custom systems", desc: "Bring your own APIs — Clara acts within the rules you define." },
      ]}
      ctaHeading="Connect your stack to Clara."
      ctaSub="Tell us what you run and we'll map the integrations you need."
    />
  );
}
