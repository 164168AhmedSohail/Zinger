import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { auth } from "./../firebase/firebase.utils";
import { signOut } from "../../redux/user/user-action";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0.5px 0.5px 0.5px 0.5px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root2: {
    position: "relative",
    width:'12%',
    height:'50%'
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    width: 'auto',
    border: "1px solid",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
  dropdown1: {
    position: "absolute",
    display:"flex",
    marginBottom:35,
    zIndex: 1,
    width:10,
    height:10,
    paddingTop: theme.spacing(8),
     paddingLeft: theme.spacing(5),
    
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const currentuser = useSelector((state) => state.currentUser);
  const classes = useStyles();
  console.log(currentuser);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Zinger
          </Typography>
          <Button component={Link} to={"/Home"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/CheckOut"} color="inherit">
            Check-Out
          </Button>
          {currentuser ? (
            <IconButton
              edge="start"
              onClick={() => {
                auth.signOut();
                dispatch(signOut());
              }}
              color="inherit"
              aria-label="menu"
            >
              <LockOpenIcon />
            </IconButton>
          ) : (
            //  <Button onClick={()=>auth.signOut()} color="inherit">hey come-out</Button>
            <Button component={Link} to={"/Login"} color="inherit">
              Sign In
            </Button>
          )}
          <LeadingClickAway />
        </Toolbar>
      </AppBar>
    </div>
  );
}
function LeadingClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <div className={classes.root2}>
        <IconButton onClick={handleClick}>
          <LocalMallOutlinedIcon />
        </IconButton>
        {open ? (
          <div>
          <div className={classes.dropdown}>
            <img src="pic_trulli.jpg" alt="Italian Trulli"/>
          </div>
          
           <div className={classes.dropdown1}>
          <Button >Click</Button>
          </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
