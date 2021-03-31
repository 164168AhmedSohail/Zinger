import { React, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 375,
    height:100,
    flexDirection: "row",
    // marginLeft: theme.spacing(9),
    marginTop: theme.spacing(1),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 160,
  }
}));



export default function MediaControlCard() {
 const classes = useStyles();
  const cart = useSelector((state) => state.cart);
      const {cartItems}=cart
      console.log(cart)
  return (
   
     cartItems.map((cart)=>(
        <Fragment>
      <Grid
        container
        spacing={1}
       
        alignItems="center"
        justify="center"
        style={{ minHeight: "20vh" }}
      >
        <Grid item flexDirection= "row" xs={3}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={cart.p.img}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {cart.p.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {cart.p.id}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  quantity:{cart.quantity}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
      
    </Fragment>
     ))
  )
   
}
