import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClaraHomepage } from "./ClaraHomepage";

describe("Clara homepage", () => {
  it("server-visible hero exposes the product and both actions", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /conversations to handle/i,
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
    expect(screen.getByText("Can we move it to Friday?")).toBeVisible();
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
});
