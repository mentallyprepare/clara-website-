import { FileCheck2, History, MessageSquareQuote, UserCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { EvidenceLink } from "../visuals/EvidenceLink";

export function ClaraLens() {
  return (
    <section className="story-section claralens" id="claralens">
      <Reveal><SectionHeading eyebrow="ClaraLens" heading="Every score should be able to show its work." summary="ClaraLens connects a quality result to the exact conversation evidence behind it, so reviewers can verify, override and improve with context." /></Reveal>
      <div className="lens-scene">
        <Reveal className="transcript" delay={80}>
          <div className="transcript__bar"><span><MessageSquareQuote aria-hidden="true" size={18} /> Conversation transcript</span><small>Example review</small></div>
          <div className="transcript__line"><span>Customer · 00:18</span><p>Could we move the appointment to Friday morning?</p></div>
          <div className="transcript__line transcript__line--evidence"><span>Clara · 00:24</span><p>I can move it to Friday at 11:30 AM. I’ll send the confirmation now.</p><i>Evidence</i></div>
          <div className="transcript__line"><span>Customer · 00:31</span><p>That works, thank you.</p></div>
        </Reveal>
        <Reveal className="review-panel" delay={160}>
          <p className="review-panel__label">Checkpoint</p>
          <EvidenceLink />
          <div className="review-meta"><span><UserCheck aria-hidden="true" size={17} /> Reviewer override available</span><span><History aria-hidden="true" size={17} /> Audit trail retained</span></div>
          <button className="review-action" type="button"><FileCheck2 aria-hidden="true" size={18} /> Review evidence</button>
        </Reveal>
      </div>
    </section>
  );
}
