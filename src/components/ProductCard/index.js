import BarChart from "../BarChart";
import StockoutLevel from "../StockoutLevel";
import "./styles.css";

const ProductCard = ({ code, name, price, wh_coverage, size_stock, count }) => {
  return (
    <li className="card">
      <span className="card__count">{count}</span>
      <img
        alt={name}
        className="card__image"
        src={require(`../../assets/images/${code}.jpg`)}
      />
      <section className="card-data">
        <span className="card-data__code">{code}</span>
        <span className="card-data__name">{name}</span>
        <span className="card-data__price">{price} &euro;</span>
        <div className="card-data__chart">
          <BarChart
            chartData={{
              labels: Object.keys(size_stock),
              datasets: [
                {
                  data: Object.values(size_stock),
                  backgroundColor: "black",
                },
              ],
            }}
          />
        </div>
        <StockoutLevel wh_coverage={wh_coverage * 100} />
      </section>
    </li>
  );
};

export default ProductCard;
