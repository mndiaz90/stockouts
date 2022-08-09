import { useEffect, useState } from "react";
import products from "../../data/products.json";
import sortProductsByCoverageAndRanking from "../../utils/sortProducts";
import ProductCard from "../ProductCard";
import "./styles.css";

const ProductsList = () => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const sortedProductsBy = sortProductsByCoverageAndRanking(products);
    setSortedProducts(sortedProductsBy);
  }, []);

  const removeProduct = (code) => {
    const products = sortedProducts.filter((product) => product.code !== code);
    setSortedProducts(products);
  };

  return (
    <ul className="product-list">
      {sortedProducts.map((product, index) => {
        return (
          <ProductCard
            count={index + 1}
            key={index}
            removeProduct={removeProduct}
            {...product}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
