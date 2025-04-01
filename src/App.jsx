import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
