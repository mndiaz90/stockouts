import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should display the header text", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Top Stockouts Review")).toBeInTheDocument();
  });

  it("should display the list of products", () => {
    render(<App />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
