import React from "react";
import { Container, Avatar, IconButton } from "@material-ui/core";
import { Slide, Zoom } from "react-awesome-reveal";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import developerPicture from "../images/miscellaneous/developer.webp";

const Intro = () => {
  return (
    <div class="intro-page">
      {/* Header */}
      <Slide direction="bottom" duration={400}>
        <nav>
          <Avatar
            id="header-pic"
            alt="Amsavarthan Lv"
            style={{
              alignSelf: "center",
              height: "40px",
              width: "40px",
            }}
            src={developerPicture}
          />
          <a href="https://lvamsavarthan.github.io/lvstore">
            <p id="name">
              Amsavarthan <span id="initial">Lv</span>
              <span style={{ fontSize: "30px", color: "#00f6ab" }}>.</span>
            </p>
          </a>
          <div>
            <IconButton
              aria-label="github"
              href="https://github.com/lvamsavarthan"
            >
              <GitHubIcon id="icon" fontSize="medium" />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/in/lvamsavarthan/"
            >
              <LinkedInIcon id="icon" fontSize="medium" />
            </IconButton>
          </div>
        </nav>
      </Slide>
      {/* for Desktop view */}
      <Container id="intro-body-desktop">
        <Slide duration={600} triggerOnce>
          <div class="intro-body-text">
            <Paper id="tagline" elevation={3}>
              Full Stack Software Developer
            </Paper>
            <p style={{ fontSize: "40px", marginTop: "30px" }}>
              Talk is Cheap.
              <br />
              Show me the code
            </p>
            <p style={{ lineHeight: "26px", color: "#bbb" }}>
              I design and code beautifully simple things,
              <br />
              and I love what I do.
            </p>
          </div>
        </Slide>

        <Slide duration={600} direction="right" triggerOnce>
          <div class="intro-body-image">
            <Avatar
              alt="Amsavarthan Lv"
              style={{ height: "350px", width: "350px" }}
              src={developerPicture}
            />
          </div>
        </Slide>
      </Container>
      {/* for Mobile view */}
      <Container id="intro-body-mobile" fixed>
        <Zoom duration={400} triggerOnce>
          <div class="intro-body-text">
            <Paper id="tagline" elevation={3} style={{}}>
              Full Stack Software Developer
            </Paper>
            <p style={{ fontSize: "50px", marginTop: "30px" }}>
              Talk is Cheap.
              <br />
              Show me the code
            </p>
            <p style={{ lineHeight: "26px", color: "#bbb" }}>
              I design and code beautifully simple things,
              <br />
              and I love what I do.
            </p>
          </div>
        </Zoom>
      </Container>
      <div id="intro-footer" />
    </div>
  );
};
export default Intro;
