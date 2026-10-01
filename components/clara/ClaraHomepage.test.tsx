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

  it("frames the problem with one call and what it requires", () => {
    render(<ClaraHomepage />);
    expect(
      screen.getByRole("heading", {
        name: /ai can answer a call\. that doesn’t mean it can handle your business\./i,
      }),
    ).toBeVisible();
    const turns = screen.getByRole("list", { name: /the customer conversation/i });
    expect(within(turns).getAllByRole("listitem")).toHaveLength(6);
    expect(within(turns).getByText(/reschedule my appointment/i)).toBeVisible();
    expect(within(turns).getByText(/does my insurance cover the appointment/i)).toBeVisible();
    expect(within(turns).getByText(/send the updated details on whatsapp/i)).toBeVisible();
    expect(within(turns).getByText(/what date works better for you/i)).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /what this conversation requires/i }),
    ).toBeVisible();
    expect(screen.getByText("Understand the context")).toBeVisible();
    expect(screen.getByText("Know what to do next")).toBeVisible();
    expect(screen.getByText("Know when to involve a human")).toBeVisible();
  });

  it("shows client proof and the playbook sections", () => {
    render(<ClaraHomepage />);
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
