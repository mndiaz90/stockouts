import { screen, render } from "@testing-library/react";
import StockoutLevel from "./index";

describe("<StockoutLevel />", () => {
  it("should display Very Low text when wh_coverage is below 50", () => {
    render(<StockoutLevel wh_coverage={25} />);

    expect(screen.getByText("Very Low")).toBeInTheDocument();
    expect(screen.queryByText("Good")).not.toBeInTheDocument();
  });

  it("should display Good text when wh_coverage is over 50", () => {
    render(<StockoutLevel wh_coverage={75} />);

    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.queryByText("Very Low")).not.toBeInTheDocument();
  });
});
