import ProductCard from "../ProductCard";
import "./styles.css";

const ProductsList = ({ sortedProducts, setSortedProducts }) => {
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
