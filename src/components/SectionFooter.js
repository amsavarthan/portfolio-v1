import React from "react";
import { Box } from "@material-ui/core";
import { Emojione } from "react-emoji-render";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const SectionFooter = () => {
  const links = (
    <Box justifyContent="space-between">
      <a href="https://github.com/lvamsavarthan">
        <GitHubIcon
          id="icon"
          style={{ paddingLeft: "10px" }}
          fontSize="small"
        />
      </a>
      <a href="https://www.linkedin.com/in/lvamsavarthan/">
        <LinkedInIcon
          id="icon"
          style={{ paddingLeft: "10px" }}
          fontSize="small"
        />
      </a>
      <a href="https://twitter.com/amsavarthanlv">
        <TwitterIcon
          id="icon"
          style={{ paddingLeft: "10px" }}
          fontSize="small"
        />
      </a>
      <a href="https://www.instagram.com/lvamsavarthan">
        <InstagramIcon
          id="icon"
          style={{ paddingLeft: "10px" }}
          fontSize="small"
        />
      </a>
      <a href="https://www.facebook.com/lvamsavarthan/">
        <FacebookIcon
          id="icon"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
          fontSize="small"
        />
      </a>
    </Box>
  );

  return (
    <div class="footer">
      <Box id="desktop-footer">
        <Emojione text="Made with <3 from India &bull;" />
        {links}
        <p>&bull; Amsavarthan Lv &copy; 2020</p>
      </Box>
      <Box id="mobile-footer">
        <Emojione
          style={{ marginTop: "0px", paddingTop: "10px", fontSize: "12px" }}
          text="Made with <3 from India."
        />
        <p style={{ marginTop: "10px" }}>Amsavarthan Lv &copy; 2020</p>
        {links}
      </Box>
    </div>
  );
};

export default SectionFooter;
