import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

ChartJS.defaults.backgroundColor = "#5eead4";
ChartJS.defaults.borderColor = "#115e59";
ChartJS.defaults.color = "white";

type BarChartProps = {
  charData: {
    type: string;
    title: string;
    xAxis: {
      categories: string[];
      title: string;
    };
    yAxis: {
      title: string;
    };
    series: {
      name: string;
      data: number[];
    }[];
  };
};

const charColors = ["lavender", "tomato", "lightblue"];

export const BarChart = ({ charData }: BarChartProps) => {
  return (
    <Bar
      data={{
        labels: charData.xAxis.categories,
        datasets: charData.series.map((item, id) => ({
          label: item.name,
          data: item.data,
          backgroundColor: charColors[id % charColors.length],
        })),
        // {
        //   label: "Acquisitions by year",
        //   data: data.map((row) => row.count),
        // },
      }}
      options={{
        scales: {
          y: {
            ticks: { color: "white" },
          },
          x: {
            ticks: { color: "white" },
          },
        },
      }}
    />
  );
};
