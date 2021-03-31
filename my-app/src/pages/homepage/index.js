import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Products } from "../../Data/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    justifyContent: "center",
    
  },
  image: {
    position: "relative",
    height: 300,
    margin: 2,
    

    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
        opacity: 1,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: theme.palette.common.white,
  },
  Productsrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#887c6c",
    opacity: 0.3,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    fontSize: "1.2rem",
    fontfamily: 'FredokaOne',
    
    opacity: 0,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${ theme.spacing(1) + 6
    }px`,
  }
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Products.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          component={Link} 
          to={'/'+ image.title}
          focusVisible ClassName={classes.focusVisible}
          style={
            image.size === "large"
              ? {
                  width: "45.2%",
                  height: 400,
                }
              : {
                  width: "30%",
                }
          }
        >
          <span
            className={classes.Productsrc}
            style={{
              border:"2px solid currentColor",
              backgroundImage: `url(${image.img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="button"
              color="initial"
              className={classes.imageTitle}
            >
              {image.title}
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
