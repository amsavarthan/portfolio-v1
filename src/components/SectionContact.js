import React from "react";
import { Container } from "@material-ui/core";
import { ReactSVG } from "react-svg";
import { Tada, Fade, Slide } from "react-awesome-reveal";
import { Emojione } from "react-emoji-render";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import contactSVG from "../images/miscellaneous/co-workers-animate.svg";

const SectionContact = () => {
  return (
    <Container id="contact-page" fixed>
      <div>
        <Tada triggerOnce>
          <p style={{ fontSize: "36px", margin: "0px", maxWidth: "400px" }}>
            Let's make something amazing together <Emojione text="🚀" />
          </p>
        </Tada>
        <Fade delay={200} triggerOnce>
          <Slide direction="top" triggerOnce>
            <p style={{ fontSize: "30px", marginTop: "60px" }}>
              Start by{" "}
              <a
                href="mailto:amsavarthan.a@gmail.com"
                style={{ color: "#00f6ab" }}
              >
                saying Hi!
              </a>
            </p>
            <p style={{ color: "#00f6ab" }}>CONTACT</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <EmailRoundedIcon />
              <p id="email">amsavarthan.a@gmail.com</p>
            </div>
          </Slide>
        </Fade>
      </div>
      <div id="contact-svg">
        <ReactSVG
          style={{ height: "400px", width: "400px", marginLeft: "40px" }}
          src={contactSVG}
        />
      </div>
    </Container>
  );
};

export default SectionContact;
