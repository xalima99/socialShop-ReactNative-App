import firebase from "../../firebase";
import { authTypes } from "../types/index";
import "firebase/firestore";

export const signup = ({ name, email, password }) => async (dispatch) => {
  dispatch({ type: authTypes.SIGNUP_REQUEST });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name,
          email,
          uid: firebase.auth().currentUser.uid,
        })
        .then(() => {
          dispatch({
            type: authTypes.SIGNUP_SUCCESS,
            payload: {
              currentUser: {
                name,
                email,
                uid: firebase.auth().currentUser.uid,
              },
            },
          });
          console.log("SUCESS ADDUED");
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: authTypes.SIGNUP_FAILURE, payload: { error } });
        });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: authTypes.SIGNUP_FAILURE, payload: { error } });
    });
};

export const signIn = ({ email, password }) => async (dispatch) => {
  console.log("LOGIN REQUEST");
  dispatch({ type: authTypes.LOGIN_REQUEST });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snap) => {
          dispatch({
            type: authTypes.LOGIN_SUCCESS,
            payload: {
              currentUser: snap.data(),
            },
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: authTypes.LOGIN_FAILURE, payload: { error } });
        });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: authTypes.LOGIN_FAILURE, payload: { error } });
    });
};
