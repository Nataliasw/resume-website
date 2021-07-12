import React, { useState, useEffect } from "react";

import sample from "../pdf/Natalia_Swiercz_CV-eng.pdf";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';



//Parts of resume components

import Skills from "./resume-skills";
import Education from "./resume-edu";
import Expirience from "./resume-expir";


const Resume = () => {


  const [defaultPdf] = useState(sample);
  const [toggle, setToggle] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();


  const handleToggle = () => {
    setToggle(prevValue => {
      return !prevValue
    })
  };



  return (
    <div className="resume" id="resume">


      <h1 className="heading-1 resume__heading">Resume</h1>

      {/* Pdf button toggle section */}

      <button onClick={handleToggle} className="resume__button-pdf">See short PDF version</button>
      {toggle && defaultPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdf}
          plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}




      <Skills></Skills>
      <Education></Education>
      <Expirience></Expirience>







    </div>
  )
};

export default Resume;



{/* Pdf button toggle section

      <button onClick={handleToggle}>See the PDF</button>
      {toggle && defaultPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer fileUrl={defaultPdf}
          plugins={[defaultLayoutPluginInstance]} />
      </Worker></>} */}