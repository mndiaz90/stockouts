import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import ProductsList from "./index";

const products = [
  {
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
  },
  {
    code: 182297,
    name: "ACME PRODUCT 02511",
    price: 22.99,
    sales_ranking: 1,
    stockout_rate: 0.3473,
    wh_coverage: 0.18,
    size_stock: {
      S: 3,
      M: 2,
      L: 2,
      XL: 0,
      XXL: 2,
    },
  },
];

const setSortedProducts = jest.fn();

describe("<ProductsList />", () => {
  it("should have two products card", () => {
    render(
      <ProductsList
        sortedProducts={products}
        setSortedProducts={setSortedProducts}
      />
    );

    const renderedProducts = screen.getAllByRole("listitem");
    expect(renderedProducts).toHaveLength(products.length);
  });

  it("should upadate the state when confirm", async () => {
    global.confirm = jest.fn(() => true);

    render(
      <ProductsList
        sortedProducts={products}
        setSortedProducts={setSortedProducts}
      />
    );

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(setSortedProducts).toHaveBeenCalledTimes(1);
  });
});
