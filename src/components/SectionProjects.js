import React from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "@material-ui/core";
import { Twemoji } from "react-emoji-render";
import Card from "./ItemCard";
//carousel library
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionProjects = () => {
  let projects = [
    {
      name: "Go Quotes API",
      desc:
        "GO Quotes is a free, open source quotations API. It was built when I was getting started with GO lang. The sample database includes 500+ quotes.",
      downloadLink: "http://goquotes.herokuapp.com/",
      gitLink: "https://github.com/lvamsavarthan/goquotes-react",
    },
    {
      name: "Media Toolbox",
      desc:
        "The all in one ad-free toolkit for social media in a single app. It contains tools for WhatsApp, Instagram and YouTube. Much more will be added in upcoming releases",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.appv2.media_toolbox",
      gitLink: "https://github.com/lvamsavarthan/Media-Toolbox",
    },
    {
      name: "Hify",
      desc:
        "Hify is an Open Source social network which is powered by Google's Firebase. Share updates and photos, engage with friends and other users worldwide and stay connect to the world.",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.social.hify",
      gitLink: "https://github.com/lvamsavarthan/hify",
    },

    {
      name: "Flames",
      desc:
        "Flames is all about fun!!.\nIt is a love calculator, a game and a love tester which can be played by anybody. The app just needs your name and your partner’s name.",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.game.flames",
      gitLink: "https://github.com/lvamsavarthan/Flames",
    },
    {
      name: "Posizione",
      desc:
        "Posizione simplifies life in the digital world by making it easy to stay connected to the people who matter most. Posizione will be useful for parents as they can track their children.",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.posizione",
      gitLink: "https://github.com/lvamsavarthan/posizione",
    },
    {
      name: "Paruvaththe Payir Sei",
      desc:
        "Paruvaththe Payir Sei (PPS) is a Q&A platform to share and gain knowledge. This app is specially made for students to improve their questioning ability.",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.pps",
      gitLink: "",
    },
    {
      name: "Trivia",
      desc:
        "Trivia is a free quiz game. It is an easy to play trivia app but at the same time it is an excellent brain game. Try the game and you will be able to give your brain a immaculate boost!",
      downloadLink:
        "https://play.google.com/store/apps/details?id=com.amsavarthan.game.trivia",
      gitLink: "https://github.com/lvamsavarthan/Trivia",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div class="projects-page">
      <Container minWidth="md">
        <Fade direction="left" duration={700} triggerOnce>
          <p
            style={{
              margin: "0",
              paddingLeft: "10px",
              color: "#00f6ab",
            }}
          >
            OUTPUTS
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
            Results of my code
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
            Approx. consumed 250+ <Twemoji text="☕" /> to produce these
          </p>
          <Carousel responsive={responsive}>
            {projects.map((project) => (
              <Card {...project} />
            ))}
          </Carousel>
        </Fade>
      </Container>
    </div>
  );
};

export default SectionProjects;
