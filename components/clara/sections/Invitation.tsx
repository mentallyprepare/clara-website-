import { ArrowRight, Mail, MessageCircleMore } from "lucide-react";
import { Reveal } from "../Reveal";

export function Invitation() {
  return (
    <>
      <section className="invitation" id="invitation">
        <div className="invitation__ticker" aria-hidden="true">
          <div><span>VOICE</span><i /><span>WEBSITE</span><i /><span>WHATSAPP</span><i /><span>HUMAN WHEN IT MATTERS</span><i /><span>VOICE</span><i /><span>WEBSITE</span><i /><span>WHATSAPP</span><i /><span>HUMAN WHEN IT MATTERS</span><i /></div>
        </div>
        <Reveal className="invitation__inner">
          <div className="invitation__copy"><p className="eyebrow">Start with the work</p><h2>Bring us the conversation that keeps getting stuck.</h2></div>
          <div className="invitation__aside">
            <p>In one working session, we’ll map what Clara should know, what it may do, and the moment your team should step in.</p>
            <div className="invitation__actions"><a className="button button--light" href="#hero"><MessageCircleMore aria-hidden="true" size={18} /> Try Clara now</a><a className="invitation__text-link" href="mailto:hello@claritel.ai?subject=Clara%20working%20session"><Mail aria-hidden="true" size={17} /> Book a working session <ArrowRight aria-hidden="true" size={17} /></a></div>
            <p className="invitation__note">No deck. No transformation programme. Just one real conversation.</p>
          </div>
        </Reveal>
        <div className="invitation__wordmark" aria-hidden="true">Clara</div>
      </section>
      <footer className="site-footer site-footer--dark"><span>Clara is part of Claritel.</span><span>Agentic AI, with a person still in the picture.</span><a href="#hero">Back to top ↑</a></footer>
    </>
  );
}
