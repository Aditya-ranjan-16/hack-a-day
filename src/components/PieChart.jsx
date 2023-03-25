import React from "react";
import { useRef } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
   const chartRef=useRef()
   const getimage=()=>{
    const link = document.createElement("a");
    link.download = `${'chart'}.jpg`
    link.href = chartRef.current.toBase64Image('image/jpeg', 1);
    console.log(chartRef.current.toBase64Image('image/jpeg', 1))
   }
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
      <button onClick={getimage}>getimage</button>
    </div>
  );
}
export default PieChart;