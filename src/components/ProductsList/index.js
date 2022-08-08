import { useEffect, useState } from "react";
import products from "../../data/products.json";
import sortProductsByCoverageAndRanking from "../../utils/sortProducts";
import ProductCard from "../ProductCard";

const ProductsList = () => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const sortedProductsBy = sortProductsByCoverageAndRanking(products);
    setSortedProducts(sortedProductsBy);
  }, []);

  return (
    <ul>
      {sortedProducts.map((product, index) => {
        return <ProductCard key={index} {...product} count={index + 1} />;
      })}
    </ul>
  );
};

export default ProductsList;
