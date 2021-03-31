import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SanProducts } from "./../../../Data/sandwiches";
import { SProducts } from "./../../../Data/shawarmas";
import { SDProducts } from "./../../../Data/shawarmas-deal";
import { BProducts } from "./../../../Data/burgers";
import { BDProducts } from "./../../../Data/burger-deals";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import { useDispatch } from "react-redux";
import { setAddToItem } from './../../../redux/cart/cart-actions';
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    // [theme.breakpoints.down("xs")]: {
     
    //   marginLeft: 100,
    //   marginRight: 100,
    //   flexDirection: "column",
    // },
  },
  contain: {
    paddingTop: theme.spacing(3),
  },
}));

export default function Categories() {
  let { title } = useParams();
  console.log(title);
  const classes = useStyles();
  const [state, setstate] = useState([]);
  let [code, setcode] = useState(false);
  const dispatch=useDispatch();

  useEffect(() => {
    return (
      setcode(true),
      title === "Burgers"
        ? setstate((state) => [state, ...BProducts])
        : title === "BurgerDeal"
        ? setstate((state) => [state, ...BDProducts])
        : title === "Shawarama"
        ? setstate((state) => [state, ...SProducts])
        : title === "ShawaramaDeal"
        ? setstate((state) => [state, ...SDProducts])
        : title === "Sandwiches"
        ? setstate((state) => [state, ...SanProducts])
        : null
    );
  }, []);
  state.shift();
  console.log(state);

  return (
    <div className={classes.root}>
       
      {code === true ? (
        <Container maxWidth="lg" className={classes.contain}>
            <Grow  in={true } timeout={1500,1500}>
            <Grid container spacing={3}>
            {state.map((p) => (
              <Grid item sm={3} xs={12}>
                <Card style={{width:'100%', height: '300px'}}>
                  <CardActionArea>
                    <CardMedia
                      height="250"
                      // width="180"
                      component="img"
                      image={p.img}
                      title={p.title}
                    />
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary" onClick={() => dispatch(setAddToItem({ p}))}>
                      Add to Cart
                    </Button>
                    <Button size="small" color="primary">
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            </Grid>
            </Grow >
          </Container>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
