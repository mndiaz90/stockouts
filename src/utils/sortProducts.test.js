import sortProductsByCoverageAndRanking from "./sortProducts.js";

const products = [
  {
    sales_ranking: 3,
    wh_coverage: 0.75,
  },
  {
    sales_ranking: 1,
    wh_coverage: 0.18,
  },
  {
    sales_ranking: 4,
    wh_coverage: 0.41,
  },
];

const sortedProducts = [
  {
    sales_ranking: 1,
    wh_coverage: 0.18,
  },
  {
    sales_ranking: 4,
    wh_coverage: 0.41,
  },
  {
    sales_ranking: 3,
    wh_coverage: 0.75,
  },
];

describe("sortProductsByCoverageAndRanking function", () => {
  it("should sort products with major stockouts ordered by sales ranking", () => {
    const result = sortProductsByCoverageAndRanking(products);
    expect(result).toEqual(sortedProducts);
  });
});
