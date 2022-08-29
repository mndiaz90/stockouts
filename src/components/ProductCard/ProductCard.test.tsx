import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ProductCard from "./index";

global.confirm = jest.fn();

const removeProduct = jest.fn();
const product = {
  code: 182295,
  name: "ACME PRODUCT 02509",
  price: 22.99,
  sales_ranking: 2,
  stockout_rate: 0.401,
  wh_coverage: 0.25,
  size_stock: {
    S: 1,
    M: 2,
    L: 0,
    XL: 4,
    XXL: 0,
  },
};

describe("<ProductCard />", () => {
  it("should display all data in the Card", () => {
    render(
      <ProductCard {...product} removeProduct={removeProduct} count={1} />
    );

    expect(screen.getByText(182295)).toBeInTheDocument();
    expect(screen.getByAltText("ACME PRODUCT 02509")).toBeInTheDocument();
    expect(screen.getByText("ACME PRODUCT 02509")).toBeInTheDocument();

    expect(screen.getByText(/22.99/i)).toBeInTheDocument();
    expect(screen.getByText(/€/i)).toBeInTheDocument();

    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("%")).toBeInTheDocument();

    expect(screen.getByText(/stockout/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  describe("button Mark Complete", () => {
    it("should appear the confirmation message when click", () => {
      render(
        <ProductCard {...product} removeProduct={removeProduct} count={1} />
      );

      fireEvent.click(screen.queryByRole("button") as HTMLButtonElement);

      expect(global.confirm).toHaveBeenCalledWith(expect.any(String));
      expect(global.confirm).toHaveBeenCalledTimes(1);
    });

    it("should call remove function when accept confirmation message", () => {
      global.confirm = jest.fn(() => true);

      render(
        <ProductCard {...product} removeProduct={removeProduct} count={1} />
      );

      fireEvent.click(screen.queryByRole("button") as HTMLButtonElement);

      expect(removeProduct).toHaveBeenCalledTimes(1);
    });

    it("should not call remove function when denied confirmation message", () => {
      global.confirm = jest.fn(() => false);
      render(
        <ProductCard {...product} removeProduct={removeProduct} count={1} />
      );

      fireEvent.click(screen.queryByRole("button") as HTMLButtonElement);

      expect(removeProduct).toHaveBeenCalledTimes(0);
    });
  });
});
