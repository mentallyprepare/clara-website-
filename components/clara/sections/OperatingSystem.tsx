import { Reveal } from "../Reveal";
import { ApproachProcess } from "../ApproachProcess";
import { PixelLogoGrid } from "@/components/ui/pixel-logo-grid";

export function OperatingSystem() {
  return (
    <section className="story-section operating-system" id="operating-system">
      <Reveal>
        <PixelLogoGrid />
      </Reveal>

      <ApproachProcess />
    </section>
  );
}

