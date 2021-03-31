import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiovWNKpESLn_hnuku36o8aMYdcaqS35Y",
  authDomain: "zero-to-mastery-c4309.firebaseapp.com",
  projectId: "zero-to-mastery-c4309",
  storageBucket: "zero-to-mastery-c4309.appspot.com",
  messagingSenderId: "968777850138",
  appId: "1:968777850138:web:7672f442957ff96d86a0a3",
  measurementId: "G-23P9W033K5",
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sigInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
