import * as React from "react";
import { auth } from "../firebase";

export const SignOutButton = () => (
  <button className="btn btn-primary" type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>
);
