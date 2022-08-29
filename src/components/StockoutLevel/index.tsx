import React from "react";
import ProgressBar from "../ProgressBar";
import Separator from "../Separator";
import "./styles.css";

const WH_COVERAGE = 50;

const COVERAGE_TYPE = {
  Good: "Good",
  VeryLow: "Very Low",
};

const StockoutLevel = ({ wh_coverage }) => {
  return (
    <>
      <Separator />
      <ProgressBar completed={wh_coverage} />
      <Separator />
      {wh_coverage < WH_COVERAGE ? (
        <span className="coverage-low__span">{COVERAGE_TYPE.VeryLow}</span>
      ) : (
        <span className="coverage-good__span">{COVERAGE_TYPE.Good}</span>
      )}
      <span className="wh-coverage__span">WH COVERAGE</span>
    </>
  );
};

export default StockoutLevel;
