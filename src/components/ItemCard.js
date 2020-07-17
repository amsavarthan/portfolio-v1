import React, { useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import CategoryIcon from "@material-ui/icons/Category";
import "typeface-roboto";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 280,
  },
});

const ItemCard = ({ name, desc, downloadLink, gitLink }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const gitHubButton = gitLink !== "" && (
    <Button
      href={gitLink}
      size="small"
      target="_blank"
      color="default"
      startIcon={<GitHubIcon />}
    >
      Github
    </Button>
  );
  return (
    <>
      <Card elevation="10" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require(`../images/apps/${name}.png`)}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {name === "Media Toolbox" ? (
            <Button
              onClick={() => {
                setOpen(true);
              }}
              size="small"
              target="_blank"
              color="primary"
              startIcon={<GetAppIcon />}
            >
              Download
            </Button>
          ) : name === "Go Quotes API" ? (
            <Button
              href={downloadLink}
              size="small"
              target="_blank"
              color="primary"
              startIcon={<CategoryIcon />}
            >
              Live Demo
            </Button>
          ) : (
            <Button
              href={downloadLink}
              size="small"
              target="_blank"
              color="primary"
              startIcon={<GetAppIcon />}
            >
              Download
            </Button>
          )}
          {gitHubButton}
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Choose a variant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Version 1 doesn't contain Youtube Downloader but Version 2 does.
            Choose the variant you need to download.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            href={downloadLink}
            onClick={() => {
              setOpen(false);
            }}
          >
            Version 1
          </Button>
          <Button
            href="https://drive.google.com/file/d/12lVvmbFSeamNswL4bPdwPxpCnlxMuOa5/view?usp=sharing"
            onClick={() => {
              setOpen(false);
            }}
          >
            Version 2
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ItemCard;
