import React, { useState } from "react";
import certificate1 from "../pdf/certificate.pdf";
import certificate2 from "../pdf/certificate-2.pdf";
import certificate3 from "../pdf/certificate-3.pdf";

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';

const Education = () => {

  const [firstPdf] = useState(certificate1);
  const [secondPdf] = useState(certificate2);
  const [thirdPdf] = useState(certificate3);

  const [toggleFirst, setToggle] = useState(false);
  const [toggleSecond, setToggleSecond] = useState(false);
  const [toggleThird, setToggleThird] = useState(false);

  const [foldOne, setFoldOne] = useState(false);
  const [foldTwo, setFoldTwo] = useState(false);
  const [foldThree, setFoldThree] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleToggle = () => {
    setToggle(prevValue => {
      return !prevValue
    })
    setFoldOne(prevValue => {
      return !prevValue
    })
  };

  const handleToggleSecond = () => {
    setToggleSecond(prevValue => {
      return !prevValue
    })
    setFoldTwo(prevValue => {
      return !prevValue
    })

  };
  const handleToggleThird = () => {
    setToggleThird(prevValue => {
      return !prevValue
    })
    setFoldThree(prevValue => {
      return !prevValue
    })

  };




  return (


    <div className="edu">
      <div>
        <h2 className="heading-2 edu__heading">Education and Certificates</h2>
        <button className="about__button" onClick={handleClick}><i className={click ? "about__icon--up fas fa-angle-double-down" : "about__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div className="edu__container">





        <ul className="edu__list">

          <li className="edu__item">
            <span className=" edu__one skills__bold--1">Poznan University of Technology</span>

          </li>

          <li className="edu__item edu__year">
            <span className="edu__two">2016-2020</span>
          </li>

          <li className="edu__item">
            <span className=" edu__three skills__bold--1">Chemistry and Process Engineering</span>
          </li>

          <li className="edu__item edu__four">
            <span >Bachelor of Engineering
            </span>
          </li>


          <li className="edu__item">
            <span className="skills__bold--1">The Complete 2021 Web Development Bootcamp (55h)</span>

          </li>

          <li className="edu__item edu__btn">

            <button onClick={handleToggle} className="edu__button">{foldOne ? "Fold" : "See PDF"}</button>
            {toggleFirst && firstPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer fileUrl={firstPdf}
                plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}
          </li>


          <li className="edu__item"><span className="skills__bold--1">React and Typescript: Build a Portfolio Project (29.5h)</span>


          </li>

          <li className="edu__item edu__btn">
            <button onClick={handleToggleSecond} className="edu__button">{foldTwo ? "Fold" : "See PDF"}</button>
            {toggleSecond && secondPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer fileUrl={secondPdf}
                plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}

          </li>

          <li className="edu__item"><span className="skills__bold--1">Advanced CSS and Sass: Flexbox, Grid, Animations and More. (28h)</span>


          </li>

          <li className="edu__item edu__btn">
            <button onClick={handleToggleThird} className="edu__button">{foldThree ? "Fold" : "See PDF"}</button>
            {toggleThird && thirdPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer fileUrl={thirdPdf}
                plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}

          </li>
        </ul>



      </div>}
    </div>

  )

};

export default Education;