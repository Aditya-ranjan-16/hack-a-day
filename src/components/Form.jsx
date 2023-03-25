import { useState,useContext } from "react";
import Papa from "papaparse";
import Data  from '../utils/data';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BarChart } from "./BarChart";
import { useRef } from "react";
import AuthContext from "../store/auth-context";
import { Fragment } from "react";
import { redirect } from "react-router-dom";

Chart.register(CategoryScale);

const allowedExtensions = ["csv"];

function Form({setview}) {
const authCtx = useContext(AuthContext);
   
  const titleref=useRef()
  const subtitleref=useRef()
  const cdateref=useRef()
  const dnameref=useRef()
  const lrdateref=useRef()
  const overviewref=useRef()
  // //input refs
   

  const xaxis=useRef()
  const yaxis=useRef()

  const [chartData, setChartData] = useState(null)
  const [data, setData] = useState([]);
  const [filedata, setFileData] = useState([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const[Graph1,setGraph1]=useState("")
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) {
      setError("Enter a valid file");
      setData([]);
      return;
    }


    const reader = new FileReader();

 
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      setData(columns);
      setFileData(parsedData)
    };
    reader.readAsText(file);
  };

  const generateGraph=()=>{


    const x=xaxis.current.value
    const y=yaxis.current.value
    console.log()
    setChartData({
        labels: filedata.map((data)=> data[`${x}`]), 
        datasets: [
          {
            label: `${y}`,
            data: filedata.map((data)=> data[`${y}`]),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "&quot;#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2,
            barPercentage:1,
            CategoryPercentage:1,
          }
        ]
      })
  }
  
  const generateDoc=()=>{
    const pdfdata={
        title:titleref.current.value,
        subtitle:subtitleref.current.value,
        dname:dnameref.current.value,
        cdate:cdateref.current.value,
        lrdate:lrdateref.current.value,
        overview:overviewref.current.value,
        graph1:Graph1
    }
      setview(pdfdata)
  }

  return (
    <Fragment>
         <div class="w-full h-full max-w-lg ">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Title Of Document
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Title"
            ref={titleref}
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Subtitle
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            ref={subtitleref}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Date Created
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="date"
            placeholder="Doe"
            ref={cdateref}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Developer Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            ref={dnameref}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Review Date
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="date"
            placeholder="Doe"
            ref={lrdateref}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Overview
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="Please write the overview of the model"
            ref={overviewref}
          />
        </div>
      </div>
      <div class="w-full  px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="csvInput"
        >
          Upload Data(.CSV)
        </label>
        <input
          onChange={handleFileChange}
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="csvInput"
          name="file"
          type="file"
          placeholder="Doe"
        />
      </div>
      <div>
        <br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleParse}>
          Parse
        </button>
      </div>
      {error}
      {data.length!==0 &&  <div style={{ marginTop: "3rem" }}>

      <div class="w-full  px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        X axis
      </label>
      <div class="relative">
        <select ref={xaxis} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        {data.map((col, idx) => <option key={idx}>{col}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full  px-3 mb-6 md:mb-0">
      <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Y axis
      </label>
      <div class="relative">
        <select ref={yaxis} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        {data.map((col, idx) => <option key={idx}>{col}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <br/>
    {filedata.length!==0 && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={generateGraph}>Generate Graph</button>}
       

      </div>}
      {chartData!=null && <BarChart chartData={chartData} setgraph={setGraph1}/>}
    </div>
    <br/>
    <br/>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={generateDoc}>Generate Document</button>

    </Fragment>
    
   
  );
}

export default Form;
