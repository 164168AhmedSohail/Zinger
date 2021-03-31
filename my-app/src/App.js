/* eslint-disable react-hooks/exhaustive-deps */
import ButtonBases from "./pages/homepage/index";
import ButtonAppBar from "./pages/appbar/appbar";
import Categories from "./pages/homepage/Categories/index";
import Form from "./pages/form/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  auth,
  createUserProfileDocument,
} from "./pages/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-action";
import { useSelector, useDispatch } from "react-redux";
import MediaControlCard from './pages/cart-items';
function App() {
  const dispatch = useDispatch();
   let unsubscibeFromAuth = useRef(null); 
  useEffect(() => {
   
  unsubscibeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot) => {
        dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
      });
    }
    setCurrentUser(userAuth);
  });
    return () => {
      unsubscibeFromAuth();
    };
  }, []);
  const currentuser = useSelector((state) => state.currentUser);
  console.log(currentuser);
  return (
    <Router>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/Home">
          <ButtonBases />
        </Route>
        <Route exact path="/CheckOut">
          <MediaControlCard />
        </Route>
        <Route exact path="/Login">
          {currentuser ? <Redirect to="/" /> : <Form />}
        </Route>
        <Route exact path="/:title">
          <Categories />
        </Route>

        <Route exact path="/">
          <ButtonBases />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
