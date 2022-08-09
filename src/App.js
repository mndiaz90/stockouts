import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./data/products.json";
import sortProductsByCoverageAndRanking from "./utils/sortProducts";
import "./App.css";

function App() {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const sortedProductsBy = sortProductsByCoverageAndRanking(products);
    setSortedProducts(sortedProductsBy);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>Top Stockouts Review</span>
      </header>
      <main>
        <ProductsList
          sortedProducts={sortedProducts}
          setSortedProducts={setSortedProducts}
        />
      </main>
    </div>
  );
}

export default App;
