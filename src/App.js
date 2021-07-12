import "./css/style.css";
import React from "react";
import Name from "./components/name";
import Navigation from "./components/navigation";
import Projects from "./components/projects";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="container">
      <Navigation></Navigation>

      <Name>
      </Name>
      <Projects></Projects>
      <div className="before-about"></div>
      <About></About>
      <Resume></Resume>
      <div className="before-contact"></div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
