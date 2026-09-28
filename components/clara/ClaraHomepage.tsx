import { SiteHeader } from "./SiteHeader";
import { AfterHello } from "./sections/AfterHello";
import { Approach } from "./sections/Approach";
import { BehindTheScenes } from "./sections/BehindTheScenes";
import { ClaraLens } from "./sections/ClaraLens";
import { EverydayWork } from "./sections/EverydayWork";
import { FitFinder } from "./sections/FitFinder";
import { Hero } from "./sections/Hero";
import { ImprovementLoop } from "./sections/ImprovementLoop";
import { Invitation } from "./sections/Invitation";
import { OperatingSystem } from "./sections/OperatingSystem";

export function ClaraHomepage() {
  return (
    <>
      <SiteHeader isHomepage />
      <main>
        {/* 01 */} <Hero />
        {/* 02 */} <AfterHello />
        {/* 03 */} <OperatingSystem />
        {/* 04 */} <Approach />
        {/* 05 */} <EverydayWork />
        {/* 06 */} <FitFinder />
        {/* 07 */} <BehindTheScenes />
        {/* 08 */} <ClaraLens />
        {/* 09 */} <ImprovementLoop />
        {/* 10 */} <Invitation />
      </main>
    </>
  );
}
