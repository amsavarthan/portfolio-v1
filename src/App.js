import React from "react";
import "./styles/App.css";
import Welcome from "./components/SectionWelcome";
import Introduction from "./components/SectionIntro";
import Skills from "./components/SectionTechnology";
import Projects from "./components/SectionProjects";
import Contact from "./components/SectionContact";
import { Divider } from "@material-ui/core";
import Footer from "./components/SectionFooter";

const App = () => {
  return (
    <>
      <Welcome />
      <Introduction />
      <Divider light />
      <Skills />
      <Divider light />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
