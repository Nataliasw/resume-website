import React, { useState } from "react";

const Skills = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  return (
    <div className="skills">
      <div>
        <h2 className="heading-2 skills__heading">Skills</h2>
        <button className="about__button" onClick={handleClick}><i className={click ? "about__icon--up fas fa-angle-double-down" : "about__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>
      {click && <div className="">
        <div className="skills__container">

          {/* Programming skills */}
          <h4 className="skills__name">Programming/Development</h4>
          <ul className="skills__list">
            <li className="skills__item"><span className="skills__bold--1">JavaScript</span> - abilty to write code in ES6 standard. Ablity to use and build websites with frameworks: <span className="skills__bold--2">React, Node.js, Redux, jQuery, Ejs, Typescript.</span></li>
            <li className="skills__item"><span className="skills__bold--1">CSS</span> - building styling and animations for websites. Ability to use <span className="skills__bold--2">Sass, Bootstrap and Bulma</span> for design.</li>
            <li className="skills__item"><span className="skills__bold--1">GIT</span> - knowlege of basic commands: adding, commiting with description, pushing projects in Github and updating it, creating new branches.</li>

          </ul>

          {/* Programs skills */}

          <h4 className="skills__name">Programs</h4>
          <ul className="skills__list">
            <li className="skills__item"><span className="skills__bold--2">MS Power BI</span> </li>
            <li className="skills__item"><span className="skills__bold--2">MS Visio</span> </li>
            <li className="skills__item"><span className="skills__bold--2">MS Excel</span> </li>
            <li className="skills__item"><span className="skills__bold--2">MS Teams</span> </li>
            <li className="skills__item"><span className="skills__bold--2">MathCAD</span> </li>
            <li className="skills__item"><span className="skills__bold--2">AutoCAD</span> </li>
            <li className="skills__item"><span className="skills__bold--2">MS PowerPoint</span> </li>
            <li className="skills__item"><span className="skills__bold--2">Procreate</span> </li>
          </ul>

          <h4 className="skills__name">Languages</h4>
          <ul className="skills__list">
            <li className="skills__item"><span className="skills__bold--1">English</span> - C1</li>
            <li className="skills__item"><span className="skills__bold--1">German</span> - B1 </li>
          </ul>
        </div>
      </div>}
    </div>

  )


};


export default Skills;