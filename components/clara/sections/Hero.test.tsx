import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Clara hero", () => {
  it("introduces Clara through the city reveal", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /^you have conversations to handle\.$/i,
      }),
    ).toBeVisible();
    expect(
      screen.getByText("I’ll take care of them."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /see how clara works/i })).toHaveAttribute(
      "href",
      "#after-hello",
    );
    expect(screen.getByRole("link", { name: "Talk to Clara" })).toHaveAttribute(
      "href",
      "#invitation",
    );
  });
});
