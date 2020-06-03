// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";
// import Login from "./components/Login";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";

// const firebaseConfig = {
//   apiKey: "AIzaSyBoWs7HCf_J4qEFzU9dLyrrUg5RhzLiEBs",
//   authDomain: "investing-scrapping.firebaseapp.com",
//   databaseURL: "https://investing-scrapping.firebaseio.com",
//   projectId: "investing-scrapping",
//   storageBucket: "investing-scrapping.appspot.com",
//   messagingSenderId: "1060655239389",
//   appId: "1:1060655239389:web:41238ed00355b3f87ccb34",
//   measurementId: "G-P4BF4VBQNK",
// };

// firebase.initializeApp(firebaseConfig);

// const routing = (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Login} />
//       <Route path="/dashboard" component={App} />
//       <Route component={NotFound} />
//     </Switch>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
