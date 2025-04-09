import React from "react";
import ApexCharts from "react-apexcharts";

const BloodGroupBarGraph = () => {
  const options = {
    colors: ["#D32F2F"], // Red color for blood group bars
    chart: {
      type: "bar",
      height: 350,
      fontFamily: "Inter, sans-serif",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadius: 5,
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
        title: { text: "Blood Groups" },
      categories: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      labels: {
        style: { fontSize: "14px", fontWeight: 500 },
      },
    },
    yaxis: {
      title: { text: "No. of People" },
    },
    
    fill: { opacity: 1 },
    tooltip: { shared: true, intersect: false },
  };

  const series = [
    {
      name: "No. of People",
      data: [85, 30, 100, 20, 80, 15, 45, 18], // Sample data
    },
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Blood Group Distribution</h2>
      <ApexCharts options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default BloodGroupBarGraph;
