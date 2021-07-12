import React from "react";


const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav__container-logo">

        <h3 className="heading-3 nav__title"> 👓 Natalia Swiercz </h3>

        <ul className="nav__list">
          <li className="nav__item nav__item--1"><a href="#projects" className="nav__link">Projects</a></li>
          <li className="nav__item nav__item--2"><a href="#about" className="nav__link">About me &nbsp;</a></li>
          <li className="nav__item nav__item--3"><a href="#resume" className="nav__link">Resume</a></li>
          <li className="nav__item nav__item--4"><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Navigation;