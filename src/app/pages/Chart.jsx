import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import chartData from "./chartData.json"; // Pastikan file JSON ini ada di direktori yang sama

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartView = () => {
  const dataView = {
    labels: chartData.charts[0].data.map((item) => item.month),
    datasets: [
      {
        label: "Jumlah View",
        data: chartData.charts[0].data.map((item) => item.value),
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-gray-100 rounded-lg ml-3 md:w-1/3">
      <h2 className="text-lg font-bold mb-4 text-center">Grafik View</h2>
      <Line data={dataView} />
    </div>
  );
};

const ChartLike = () => {
  const dataLike = {
    labels: chartData.charts[1].data.map((item) => item.month),
    datasets: [
      {
        label: "Jumlah Like",
        data: chartData.charts[1].data.map((item) => item.value),
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-gray-100 rounded-lg md:w-1/3">
      <h2 className="text-lg font-bold mb-4 text-center">Grafik Like</h2>
      <Line data={dataLike} />
    </div>
  );
};

const ChartSubscribe = () => {
  const dataSubscribe = {
    labels: chartData.charts[2].data.map((item) => item.month),
    datasets: [
      {
        label: "Jumlah Subscribe",
        data: chartData.charts[2].data.map((item) => item.value),
        backgroundColor: "#ff5722",
        borderColor: "#ff5722",
      },
    ],
  };

  return (
    <div className="bg-gray-100 rounded-lg mr-3 md:w-1/3">
      <h2 className="text-lg font-bold mb-4 text-center">Grafik Subscribe</h2>
      <Bar data={dataSubscribe} />
    </div>
  );
};

const ProfileHeader = () => {
  return (
    <div className="container mx-auto py-6 overflow-x-auto mt-5 bg-white rounded-lg">
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <ChartView />
        <ChartLike />
        <ChartSubscribe />
      </div>
    </div>
  );
};

export default ProfileHeader;