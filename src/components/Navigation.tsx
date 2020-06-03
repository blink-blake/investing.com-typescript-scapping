import * as React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import { AuthUserContext } from "../firebase/AuthUserContext";
import { SignOutButton } from "./SignOutButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  // <ul>
  //   <li>
  //     <Link to={routes.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={routes.HOME}>Home</Link>
  //   </li>

  //   <li>
  //     <SignOutButton />
  //   </li>
  // </ul>

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    {/* <Navbar.Brand href="/">Landing</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link
          className="nav-link"
          to={{
            pathname: routes.HOME,
          }}
        >
          Home
        </Link>
      </Nav>

      <Nav>
        <Link
          className="nav-link"
          to={{
            pathname: routes.BTC_USD,
          }}
        >
          BTC-USD
        </Link>
      </Nav>
      <Nav>
        <Link
          className="nav-link"
          to={{
            pathname: routes.EUR_USD,
          }}
        >
          EUR-USD
        </Link>
      </Nav>
      <Nav>
        <SignOutButton />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    {/* <Navbar.Brand href="/">Landing</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link
          className="nav-link"
          to={{
            pathname: routes.HOME,
          }}
        >
          Home
        </Link>
      </Nav>
      <Nav>
        <Link
          className="nav-link"
          to={{
            pathname: routes.SIGN_IN,
          }}
        >
          Sign In
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  // <ul>
  //   <li>
  //     <Link to={routes.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={routes.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>
);
