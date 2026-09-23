import type { Metadata } from "next";
import { Compass, Users, Sparkles, HeartHandshake, Briefcase, Mail } from "lucide-react";
import { SubPage } from "@/components/clara/SubPage";

export const metadata: Metadata = { title: "Company · Clara by Claritel" };

export default function CompanyPage() {
  return (
    <SubPage
      eyebrow="Company"
      title="We build support that people can"
      emphasis="trust."
      intro="Claritel is a team of engineers and operators who believe an answer is only useful when the next step actually happens — and when a person can stand behind it."
      features={[
        { icon: Compass, title: "Our mission", desc: "Make routine work disappear so people handle the conversations that matter." },
        { icon: Sparkles, title: "What we value", desc: "Evidence over guesswork. Clear rules over black boxes." },
        { icon: Users, title: "The team", desc: "Support veterans and ML engineers, building in the open with customers." },
        { icon: HeartHandshake, title: "Customers first", desc: "We start with one workflow worth fixing and earn the next one." },
        { icon: Briefcase, title: "Careers", desc: "We're hiring people who care about the details behind every reply." },
        { icon: Mail, title: "Get in touch", desc: "Partnerships, press or just a question — we'd like to hear from you." },
      ]}
      ctaHeading="Let's build something worth trusting."
      ctaSub="Talk to the team behind Clara about your workflow or a role."
    />
  );
}
