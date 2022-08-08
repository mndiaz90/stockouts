export default function sortProductsByCoverageAndRanking(products = []) {
  return products.sort((a, b) => {
    return a.wh_coverage - b.wh_coverage || b.sales_ranking - a.sales_ranking;
  });
}
