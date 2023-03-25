import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../components/MyDocument';
import Chart from "chart.js/auto";
import { useState,useRef } from "react";
import Data  from '../utils/data';
import { CategoryScale } from "chart.js";
import PieChart from '../components/PieChart';
import { Fragment } from 'react';

Chart.register(CategoryScale);
function ViewPdf(){
  
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "&quot;#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      })
  
return(
<Fragment>
<PieChart chartData={chartData}   />
<PDFViewer className='w-full h-[1000px]'> 
    <MyDocument />
  </PDFViewer>
</Fragment>


)
}

export default ViewPdf