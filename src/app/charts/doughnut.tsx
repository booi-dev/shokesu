"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// ChartJS.defaults.color = "#ff0000";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  animation: false,
  cutout: "80%",
};

const textPlugin = {
  id: "centerText",
  beforeDraw: (chart: ChartJS) => {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;

    ctx.restore();
    ctx.font = "16px Arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff"; // Text color

    const text = "Center Text"; // The text you want to display

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const SimpleDoughnut = () => (
  <Doughnut data={data} options={options} plugins={[textPlugin]} />
);

export default SimpleDoughnut;
