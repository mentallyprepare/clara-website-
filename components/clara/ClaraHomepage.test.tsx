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
    expect(screen.getByText("Booking updated")).toBeVisible();
  });
});
