import React, { useState } from "react";

const About = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };



  return (


    <div className="about" id="about">


      <div>
        <h2 className="heading-2 about__heading">Get to know me</h2>
        <button className="about__button" onClick={handleClick}><i className={click ? "about__icon--up fas fa-angle-double-down" : "about__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div className="about__container">
        <p className=" about__paragraph">A Poznan University of Technology graduate, with several years of experience in Customer Service sector. Always interested in designing and creating, I decided to change my job. I have been actively learning programming languages and the basics of programming for six months, which allowed me to create my first small projects. I am a very thorough and pragmatic person, but also detail- and customer-oriented worker. </p>
        <p className="about__paragraph about__paragraph--1">📚 &nbsp; &nbsp; I enjoy reading about history and human nutrition.</p>
        <p className="about__paragraph about__paragraph--1">✈️ &nbsp; &nbsp; My favourite holiday destination is Croatia. </p>
        <p className="about__paragraph about__paragraph--1">🥗 &nbsp; &nbsp; In my free time I most likely be cooking or eating out! </p>
      </div>}



    </div>

  )


};


export default About;
