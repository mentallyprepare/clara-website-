import { describe, expect, it } from "vitest";
import { claraSections } from "./clara-content";

describe("Clara public narrative", () => {
  it("keeps the approved seven-section story in order", () => {
    expect(claraSections.map((section) => section.id)).toEqual([
      "hero",
      "after-hello",
      "operating-system",
      "everyday-work",
      "approach",
      "claralens",
      "invitation",
    ]);
  });

  it("does not leak approval markers or unsupported claims", () => {
    const publicCopy = JSON.stringify(claraSections);
    expect(publicCopy).not.toMatch(
      /approval needed|99\.9%|SOC 2|ISO 27001|RBI compliant/i,
    );
  });
});
