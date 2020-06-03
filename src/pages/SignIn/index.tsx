import * as React from "react";
import { withRouter } from "react-router-dom";
import { auth as mainAuth } from "../../firebase/firebase";
import { Redirect } from "react-router";
import * as routes from "../../constants/routes";

import "../../../src/Login.css";

import { SignInForm } from "./SignInForm";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <div className="main-div">
    {mainAuth.currentUser != null ? (
      <Redirect
        to={{
          pathname: routes.HOME,
        }}
      />
    ) : (
      <div>
        <h1>Sign In</h1>
        <SignInForm history={history} />
        <hr />
      </div>
    )}
  </div>
);

export const SignIn = withRouter(SignInComponent);
