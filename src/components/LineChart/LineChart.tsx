import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { IFilteredTableProps } from "../../data/models";

const LineChart: React.FC<IFilteredTableProps> = ({ data }) => {
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      selectedRegions.includes(item["Регион"])
    );
    const chartData = {};
    filteredData.forEach((item) => {
      if (!chartData[item["Регион"]]) {
        chartData[item["Регион"]] = {
          label: item["Регион"],
          data: [{ x: item["Год"], y: item["Показатель"] }],
          borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          fill: false,
        };
      } else {
        chartData[item["Регион"]].data.push({
          x: item["Год"],
          y: item["Показатель"],
        });
      }
    });

    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        datasets: Object.values(chartData),
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
        },
      },
    });
  }, [selectedRegions]);

  return <canvas id="myChart" width="400" height="400"></canvas>;
};

export default LineChart;
