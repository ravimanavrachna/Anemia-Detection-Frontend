import React from "react";
import ApexCharts from "react-apexcharts";

const BloodGroupDonutChart = ({categories=["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],data=[22.5, 7.5, 25, 5, 20, 3.8, 12.5, 3.8]}) => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: categories,
    colors: ["#FF9F43", "#D32F2F", "#C62828", "#6D4C41", "#FF3D00", "#8D6E63", "#BF360C", "#E64A19"],
    dataLabels: { 
      enabled: true,
      formatter: (val) => ` ${val.toFixed(1)}%`,
    },
    legend: {
      position: "bottom",
    },
  };

  const series = data; // Percentage values

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-800 text-start mb-4">Blood Group Distribution</h2>
      <ApexCharts options={options} series={series} type="donut" height={330} />
      <p className="text-lg font-medium mt-4 text-center">Total people: 400</p>
    </div>
  );
};

export default BloodGroupDonutChart;
