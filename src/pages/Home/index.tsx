import * as React from "react";
import { withAuthorization } from "../../firebase/withAuthorization";

// import { Redirect } from "react-router";
// import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
// import { DYNAMIC_LIST } from "../../constants/routes";
// import { DynamicList } from "../PageNames/DynamicList";

export interface IHomeComponentState {
  node_name: string;
  node_full_name: string;
  clicked: boolean;
}

interface IHomeComponentProps {}

class HomeComponent extends React.Component<
  IHomeComponentProps,
  IHomeComponentState
> {
  constructor(props: IHomeComponentProps, state: IHomeComponentState) {
    super(props, state);

    this.state = {
      clicked: false,
      node_full_name: "",
      node_name: "",
    };
  }

  public render() {
    // console.log(this.state);

    return (
      <div className="text-center">
        <h2>Home Page</h2>
        {/* {this.state.clicked && this.state.node_name !== "" ? (
          // <DynamicList node />
          <Redirect
            to={{ pathname: DYNAMIC_LIST, state: this.state }}
            children={{ props: this.state }}
          />
        ) : (
          //
          //
          <div>
            

            <br />
            <Dropdown as={ButtonGroup}>
              <Button
                onClick={() => this.setState({ clicked: true })}
                variant="success"
              >
                OPEN
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    this.setState({
                      clicked: false,
                      node_name: "btc-usd-technical",
                      node_full_name: "Bitcoin-USD Technical",
                    })
                  }
                >
                  BTC-USD
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    this.setState({
                      clicked: false,
                      node_name: "eur-usd-technical",
                      node_full_name: "EUR-USD Technical",
                    })
                  }
                >
                  EUR-USD
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )} */}
      </div>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Home = withAuthorization(authCondition)(HomeComponent);
