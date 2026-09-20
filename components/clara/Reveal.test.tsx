import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Reveal } from "./Reveal";

describe("Reveal", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    );
  });

  it("keeps content visible when reduced motion is requested", () => {
    render(
      <Reveal>
        <p>Booking updated</p>
      </Reveal>,
    );
    expect(screen.getByText("Booking updated")).toBeVisible();
    expect(screen.getByText("Booking updated").parentElement).toHaveAttribute(
      "data-visible",
      "true",
    );
  });
});
