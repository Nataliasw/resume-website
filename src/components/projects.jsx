import React from "react";
import card1 from "../images/card-1.png";
import card2 from "../images/card-2.png";
import card3 from "../images/card-3.jpg";

const Projects = () => {
  return (
    <div className="projects" id="projects">


      <div className="project__card">

        <img src={card1} alt="" className="project__img"></img>

        <h4 className="project__name">Booksercher App</h4>
        <span className="project__details">Website where you can search book by title from NY Times Bestsellers database.</span>
        <button className="project__btn project__btn-1"><a href="https://nataliasw.github.io/booksearcher-app/" className="project__target" target="_blank">See project</a></button>
        <button className="project__btn project__btn-2"><a href="https://github.com/Nataliasw/booksearcher-app" className="project__target" target="_blank">See documentation</a></button>
      </div>

      <div className="project__card">

        <img src={card2} alt="" className="project__img"></img>
        <h4 className="project__name">Preview Pack</h4>
        <span className="project__details">Website for writing and executing your code on the go.</span>
        <button className=" project__btn project__btn-1"><a href="https://nataliasw.github.io/preview-pack/" className="project__target" target="_blank">See project</a></button>
        <button className="project__btn project__btn-2"> <a href="https://github.com/Nataliasw/preview-pack" className="project__target" target="_blank">See documentation</a></button>

      </div>

      <div className="project__card">

        <img src={card3} alt="" className="project__img"></img>
        <h4 className="project__name">Maps Draw</h4>
        <span className="project__details">Website that helps you pick maps extenstions for Talisman board game.</span>


        <button className="project__btn project__btn-2"><a href="https://github.com/Nataliasw/Maps-draw-Talisman" className="project__target" target="_blank">See documentation</a></button>

      </div>



    </div >


  )
};

export default Projects;