import BarChart from "../BarChart";
import StockoutLevel from "../StockoutLevel";
import "./styles.css";

const ProductCard = ({
  code,
  count,
  name,
  price,
  removeProduct,
  size_stock,
  wh_coverage,
}) => {
  const onClickComplete = (code) => {
    if (
      window.confirm("Are you sure you want to mark this product as complete?")
    )
      removeProduct(code);
  };

  return (
    <li className="card">
      <section className="card-image">
        <span className="card-image__count">{count}</span>
        <img
          alt={name}
          className="card-image__img"
          src={require(`../../assets/images/${code}.jpg`)}
        />
        <button
          className="card-image__btn"
          onClick={() => onClickComplete(code)}
        >
          Mark Complete
        </button>
      </section>
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
