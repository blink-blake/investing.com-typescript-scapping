import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBoWs7HCf_J4qEFzU9dLyrrUg5RhzLiEBs",
  authDomain: "investing-scrapping.firebaseapp.com",
  databaseURL: "https://investing-scrapping.firebaseio.com",
  projectId: "investing-scrapping",
  storageBucket: "investing-scrapping.appspot.com",
  messagingSenderId: "1060655239389",
  appId: "1:1060655239389:web:41238ed00355b3f87ccb34",
  measurementId: "G-P4BF4VBQNK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
