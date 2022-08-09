import "./styles.css";

const WH_COVERAGE = 50;

const COVERAGE_TYPE = {
  Good: "Good",
  VeryLow: "Very Low",
};

const StockoutLevel = ({ wh_coverage }) => {
  return (
    <>
      {wh_coverage < WH_COVERAGE ? (
        <span className="coverage-low">{COVERAGE_TYPE.VeryLow}</span>
      ) : (
        <span className="coverage-good">{COVERAGE_TYPE.Good}</span>
      )}
      <span className="coverage">WH COVERAGE</span>
    </>
  );
};

export default StockoutLevel;
