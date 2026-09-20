import { ArrowRight, Mail, MessageCircleMore } from "lucide-react";
import { Reveal } from "../Reveal";

export function Invitation() {
  return (
    <>
      <section className="invitation" id="invitation">
        <Reveal className="invitation__inner">
          <p className="eyebrow">A useful place to begin</p>
          <h2>Bring us one conversation worth fixing.</h2>
          <p>Hear Clara in the browser, or bring a workflow to the team behind her. We’ll start with the outcome, the boundary and the evidence.</p>
          <div className="invitation__actions">
            <a className="button button--light" href="#hero"><MessageCircleMore aria-hidden="true" size={18} /> Try Clara now</a>
            <a className="button button--outline-light" href="mailto:hello@claritel.ai?subject=Clara%20working%20session"><Mail aria-hidden="true" size={18} /> Book a working session <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </Reveal>
      </section>
      <footer className="site-footer"><span>Clara is part of Claritel.</span><a href="#hero">Back to top</a></footer>
    </>
  );
}
