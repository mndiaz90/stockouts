import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 2,
      },
    },
  },
};

const BarChart = ({ chartData, options = defaultOptions }) => {
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
