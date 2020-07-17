import React from "react";
import { Box } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import { ReactSVG } from "react-svg";
import { Emojione } from "react-emoji-render";
import introSVG from "../images/miscellaneous/programming-animate.svg";

const About = () => {
  return (
    <div class="about-page">
      <Box>
        <ReactSVG
          style={{ padding: "20px", height: "350px", width: "350px" }}
          src={introSVG}
        />
      </Box>
      <Fade triggerOnce>
        <Box style={{ padding: "30px" }}>
          <p style={{ color: "#00f6ab" }}>INTRODUCE</p>
          <p style={{ fontSize: "30px", margin: "0" }}>
            Hello! I'm Amsavarthan Lv <Emojione text="👋" />
          </p>
          <p
            style={{
              fontSize: "20px",
              marginTop: "30px",
              fontStyle: "italic",
            }}
          >
            Every great product begins with an even better story
          </p>
          <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "680px" }}>
            Since beginning of my journey as a software developer nearly foo
            years ago ( I litreally forgot when I started <Emojione text="👀" />{" "}
            ), I've done so many projects and collaborated with talented people
            to create much more effecient one's for both bussiness and consumer
            use. I'm quietly confident, naturally curious, and perpetually
            working on improving my skills over time.
          </p>
        </Box>
      </Fade>
    </div>
  );
};
export default About;
