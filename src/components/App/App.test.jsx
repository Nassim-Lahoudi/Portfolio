import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

afterEach(() => {
  cleanup();
});

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe("App routing", () => {
  it("renders home route", () => {
    renderAt("/");
    expect(screen.getByText(/software developer/i)).toBeInTheDocument();
  });

  it("renders projects route", () => {
    renderAt("/project");
    expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument();
  });

  it("renders about route", () => {
    renderAt("/about");
    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
  });

  it("renders contact route", () => {
    renderAt("/contact");
    expect(screen.getByRole("heading", { name: /contact me/i })).toBeInTheDocument();
  });

  it("redirects unknown route to home", () => {
    renderAt("/unknown");
    expect(screen.getByRole("heading", { name: /software developer/i })).toBeInTheDocument();
  });
});