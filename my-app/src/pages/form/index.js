import SignIn from "./components/sign-in-component";
import SignUp from "./components/sign-up-component";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  contain: {
    paddingLeft: theme.spacing(3),
  },
}));
export default function Form() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.contain}>
        <SignIn />
      </Box>
      <Box pl={32}>
        <SignUp />
      </Box>
    </Container>
  );
}
