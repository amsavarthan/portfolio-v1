import React from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Grid, Tooltip } from "@material-ui/core";
import { Emojione } from "react-emoji-render";

//assets
import android from "../images/technology/android.png";
import bootstrap from "../images/technology/bootstrap.png";
import css from "../images/technology/css.png";
import figma from "../images/technology/figma.png";
import firebase from "../images/technology/firebase.png";
import flutter from "../images/technology/flutter.png";
import git from "../images/technology/git.png";
import go from "../images/technology/go.png";
import heroku from "../images/technology/heroku.png";
import html from "../images/technology/html.png";
import java from "../images/technology/java.png";
import js from "../images/technology/js.png";
import material_ui from "../images/technology/material_ui.png";
import node from "../images/technology/node.png";
import react from "../images/technology/react.png";
import spring_boot from "../images/technology/spring_boot.png";
import stackoverflow from "../images/technology/stackoverflow.png";
import xd from "../images/technology/xd.png";

const SectionTechnology = () => {
  let stackoverflowTip = (
    <Emojione text="Stackoverflow (Of course 😂 it's mandatory right?)" />
  );
  return (
    <div class="skills-page">
      <Container minWidth="md">
        <Fade direction="left" duration={700} triggerOnce>
          <p
            style={{
              margin: "0",
              paddingLeft: "10px",
              color: "#00f6ab",
            }}
          >
            TECHNOLOGIES
          </p>

          <p
            style={{
              margin: "0",
              paddingLeft: "10px",
              paddingTop: "10px",
              marginBottom: "25px",
              fontSize: "30px",
            }}
          >
            In my skill book <Emojione text="📚" />
          </p>
          <p
            style={{
              color: "#aaa",
              paddingLeft: "10px",
              marginBottom: "50px",
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            <a
              href="mailto:amsavarthan.a@gmail.com"
              style={{ color: "#00f6ab" }}
            >
              Suggest me
            </a>{" "}
            a new technology, I am quick learner though
          </p>
        </Fade>
        <Fade direction="top" duration={700} triggerOnce>
          <Grid
            id="grid"
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Tooltip title="Android">
              <img alt="Android" src={android} height="120px" />
            </Tooltip>
            <Tooltip title="Bootstrap">
              <img alt="Bootstrap" src={bootstrap} height="120px" />
            </Tooltip>
            <Tooltip title="CSS3">
              <img alt="CSS3" src={css} height="120px" />
            </Tooltip>
            <Tooltip title="Figma">
              <img alt="Figma" src={figma} height="120px" />
            </Tooltip>
            <Tooltip title="Firebase">
              <img alt="Firebase" src={firebase} height="120px" />
            </Tooltip>
            <Tooltip title="Flutter">
              <img alt="Flutter" src={flutter} height="120px" />
            </Tooltip>
            <Tooltip title="Git">
              <img alt="Git" src={git} height="120px" />
            </Tooltip>
            <Tooltip title="GO lang">
              <img alt="GO" src={go} height="120px" />
            </Tooltip>
            <Tooltip title="Heroku">
              <img alt="Heroku" src={heroku} height="120px" />
            </Tooltip>
            <Tooltip title="HTML5">
              <img alt="HTML5" src={html} height="120px" />
            </Tooltip>
            <Tooltip title="JAVA">
              <img alt="JAVA" src={java} height="120px" />
            </Tooltip>
            <Tooltip title="JavaScript">
              <img alt="JavaScript" src={js} height="120px" />
            </Tooltip>
            <Tooltip title="Material UI">
              <img alt="Material UI" src={material_ui} height="120px" />
            </Tooltip>
            <Tooltip title="Node JS">
              <img alt="Node JS" src={node} height="120px" />
            </Tooltip>
            <Tooltip title="React JS">
              <img alt="React JS" src={react} height="120px" />
            </Tooltip>
            <Tooltip title="Spring Boot (REST API)">
              <img alt="Spring Boot" src={spring_boot} height="120px" />
            </Tooltip>
            <Tooltip title={stackoverflowTip}>
              <img alt="Stackoverfow" src={stackoverflow} height="120px" />
            </Tooltip>
            <Tooltip title="Adobe XD">
              <img alt="Adobe XD" src={xd} height="120px" />
            </Tooltip>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
};

export default SectionTechnology;
