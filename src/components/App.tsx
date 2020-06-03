import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { withAuthentication } from "../firebase/withAuthentication";

import { Home } from "../pages/Home";

import { Landing } from "../pages/Landing";

import { SignIn } from "../pages/SignIn";

import { Navigation } from "./Navigation";

import NotFound from "../pages/NotFound/NotFound";
import { Btc_Usd } from "../pages/PageNames/Btc_Usd";
import { Eur_Usd } from "../pages/PageNames/Eur_Usd";
import { RenderPage } from "./RenderPage";

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <hr />
          <Switch>
            <Route exact={true} path={routes.LANDING} component={Landing} />

            <Route exact={true} path={routes.SIGN_IN} component={SignIn} />

            <Route exact={true} path={routes.HOME} component={Home} />

            <Route exact={true} path={routes.BTC_USD} component={Btc_Usd} />

            <Route exact={true} path={routes.EUR_USD} component={Eur_Usd} />

            <Route
              exact={true}
              path={routes.RENDER_PAGE}
              component={RenderPage}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
