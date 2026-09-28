import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClaraHomepage } from "./ClaraHomepage";

describe("Clara homepage", () => {
  it("server-visible hero exposes the product and both actions", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /^you have conversations to handle\.$/i,
      }),
    ).toBeVisible();
    const talkLinks = screen.getAllByRole("link", { name: "Talk to Clara" });
    expect(talkLinks).toHaveLength(2);
    talkLinks.forEach((link) =>
      expect(link).toHaveAttribute("href", "#invitation"),
    );
    expect(
      screen.getByRole("link", { name: /see how clara works/i }),
    ).toHaveAttribute("href", "#after-hello");
    expect(screen.getByText("I’ll take care of them.")).toBeInTheDocument();
  });

  it("shows the full action path and human boundary", () => {
    render(<ClaraHomepage />);
    const actionPath = screen.getByRole("list", {
      name: /conversation-to-action workflow/i,
    });
    expect(within(actionPath).getAllByRole("listitem")).toHaveLength(4);
    expect(
      within(actionPath).getByText(/opening in Bristol, Leeds and Glasgow/i),
    ).toBeVisible();
    expect(within(actionPath).getByText(/fit checked/i)).toBeVisible();
    expect(within(actionPath).getByText("Sales-ready lead")).toBeVisible();
    expect(within(actionPath).getByText(/pricing exceptions go to Rohan/i)).toBeVisible();
    expect(
      screen.getByRole("list", { name: /teams working with claritel/i }),
    ).toBeVisible();
    expect(screen.getByRole("img", { name: "Panasonic" })).toBeVisible();
    expect(screen.getByLabelText("Flowstack")).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /one playbook\. every channel/i }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /three conversations\. already handled/i }),
    ).toBeVisible();
  });

  it("connects implementation, evidence, and the final invitation", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", { name: /start with one number/i }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /^listen\.$/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /^check\.$/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /^change\.$/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /^measure again\.$/i })).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /a score is only useful if you can check it/i,
      }),
    ).toBeVisible();
    expect(screen.getByText(/evidence found in transcript/i)).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /one messy conversation/i }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Book a working session" }),
    ).toBeVisible();
  });
});
