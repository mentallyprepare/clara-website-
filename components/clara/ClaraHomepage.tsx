import { SiteHeader } from "./SiteHeader";
import { AfterHello } from "./sections/AfterHello";
import { Approach } from "./sections/Approach";
import { ClaraLens } from "./sections/ClaraLens";
import { EverydayWork } from "./sections/EverydayWork";
import { Hero } from "./sections/Hero";
import { Invitation } from "./sections/Invitation";
import { OperatingSystem } from "./sections/OperatingSystem";

export function ClaraHomepage() {
  return (
    <>
      <SiteHeader isHomepage />
      <main>
        <Hero />
        <AfterHello />
        <OperatingSystem />
        <EverydayWork />
        <Approach />
        <ClaraLens />
        <Invitation />
      </main>
    </>
  );
}
