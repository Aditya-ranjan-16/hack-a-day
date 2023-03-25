import { useState } from "react";
import Form from "../components/Form";
import ViewPdf from "./ViewPdf";

function Home() {
    const [viewdata,setViewdata]=useState(null)
  return (
    <div >
      <center>
        {viewdata===null &&  <Form setview={setViewdata}/>}
        {viewdata!==null && <ViewPdf pdfdata={viewdata}/>}
      </center>
    </div>
  );
}

export default Home;
