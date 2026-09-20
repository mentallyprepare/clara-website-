import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Clara hero", () => {
  it("introduces Clara through a completed piece of work", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /conversations should move work forward/i,
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("group", { name: /choose a conversation/i }),
    ).toBeVisible();
    expect(screen.getByText("Booking updated")).toBeVisible();
    expect(screen.getByText(/completed with your rules/i)).toBeVisible();
  });

  it("switches the visible conversation and outcome", () => {
    render(<Hero />);

    const leadScenario = screen.getByRole("button", {
      name: /qualify a lead/i,
    });
    fireEvent.click(leadScenario);

    expect(leadScenario).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/we need support across three locations/i)).toBeVisible();
    expect(screen.getByText("Lead qualified")).toBeVisible();
    expect(screen.getByText("Ready for sales · Full context attached")).toBeVisible();
  });
});
