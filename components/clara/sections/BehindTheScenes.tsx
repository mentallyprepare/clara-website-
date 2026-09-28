import { Reveal } from "../Reveal";
import { ChangeWorkbench } from "@/components/ui/change-workbench";

export function BehindTheScenes() {
  return (
    <section
      id="behind-the-scenes"
      className="story-section behind-the-scenes"
    >
      <div className="bts-layout">
          <Reveal>
            <p className="eyebrow">Behind the scenes</p>
            <h2>The work stays editable.</h2>
            <p>Clara does not disappear into a black box after launch. Your team can point to the exact sentence, rule or action that changed—and see whether it helped.</p>
            <blockquote><strong>18% fewer repeat calls</strong><span>after one answer and one handoff rule changed</span></blockquote>
          </Reveal>

          <Reveal delay={90}>
            <ChangeWorkbench />
          </Reveal>
      </div>
    </section>
  );
}

