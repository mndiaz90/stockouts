export default function sortProductsByCoverageAndRanking(products = []) {
  return products.sort((a, b) => {
    return a.wh_coverage - b.wh_coverage || a.sales_ranking - b.sales_ranking;
  });
}
