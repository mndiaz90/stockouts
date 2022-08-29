import React from "react";
import { Product } from "../../utils/types";
import ProductCard from "../ProductCard";
import "./styles.css";

interface ProductsListProps {
  sortedProducts: Product[];
  setSortedProducts: Function;
}

const ProductsList = ({
  sortedProducts,
  setSortedProducts,
}: ProductsListProps) => {
  const removeProduct = (code: number) => {
    const products = sortedProducts.filter(
      (product: Product) => product.code !== code
    );
    setSortedProducts(products);
  };

  return (
    <ul className="product-list">
      {sortedProducts.map((product: Product, index: number) => {
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
