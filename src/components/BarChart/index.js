import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
      },
      ticks: {
        stepSize: 2,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const BarChart = ({ chartData, options = defaultOptions }) => {
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
