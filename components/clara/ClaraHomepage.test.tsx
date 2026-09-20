import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClaraHomepage } from "./ClaraHomepage";

describe("Clara homepage", () => {
  it("server-visible hero exposes the product and both actions", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /conversations should move work forward/i,
      }),
    ).toBeVisible();
    const talkLinks = screen.getAllByRole("link", { name: "Talk to Clara" });
    expect(talkLinks).toHaveLength(2);
    talkLinks.forEach((link) =>
      expect(link).toHaveAttribute("href", "#invitation"),
    );
    expect(
      screen.getByRole("link", { name: "Hear a sample conversation" }),
    ).toHaveAttribute("href", "#after-hello");
    expect(screen.getAllByText("Booking updated").length).toBeGreaterThan(0);
  });

  it("shows the full action path and human boundary", () => {
    render(<ClaraHomepage />);
    const actionPath = screen.getByRole("list", {
      name: /conversation-to-action workflow/i,
    });
    expect(within(actionPath).getAllByRole("listitem")).toHaveLength(4);
    expect(
      screen.getByText("Can we move my appointment to Friday morning?"),
    ).toBeVisible();
    expect(screen.getByText(/available slots/i)).toBeVisible();
    expect(screen.getAllByText(/booking updated/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/passed to Priya with context/i)).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /prompt does not know/i }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /small moments become completed work/i,
      }),
    ).toBeVisible();
  });

  it("connects implementation, evidence, and the final invitation", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", { name: /number you need to move/i }),
    ).toBeVisible();
    expect(screen.getByText("Listen")).toBeVisible();
    expect(screen.getByText("Check")).toBeVisible();
    expect(screen.getByText("Change")).toBeVisible();
    expect(screen.getByText("Measure again")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /every score should be able to show its work/i,
      }),
    ).toBeVisible();
    expect(screen.getByText(/evidence found in transcript/i)).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /conversation worth fixing/i }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Book a working session" }),
    ).toBeVisible();
  });
});
