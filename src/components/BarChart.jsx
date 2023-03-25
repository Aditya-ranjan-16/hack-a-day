import { Bar } from "react-chartjs-2";
import { useRef } from "react";
import { useEffect } from "react";
export const BarChart = ({ chartData,setgraph }) => {
    const chartRef=useRef()

    const getimage=()=>{
     const link = chartRef.current.toBase64Image('image/jpeg', 1);
      setgraph(link)
    }

    useEffect(()=>{
        getimage()
    },[])
  return (
    
    <div className="chart-container">
        <br/>
      <h2 style={{ textAlign: "center" }}>Chart</h2>
      <Bar
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
           
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};