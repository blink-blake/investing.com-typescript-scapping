import * as React from "react";
import { db } from "../../firebase/firebase";
import { withAuthorization } from "../../firebase/withAuthorization";
import "../../../src/Login.css";
import { CardList } from "../../components/CardList";

const node_name = "btc-usd-technical";
const moving_averages = "Moving Averages";
const pivot_points = "Pivot Points";
const technical_indicators = "Technical Indicators";

interface IBtc_UsdProps {}

export interface IFinalTableObject {
  a_TableHeadArray: string[];
  a_TableRowsArray: string[][];
  s_TableTitle: string;
  s_TableDate: string;
}

export interface IPage {
  time: string; //time is timestamp
  imageUrl: string;
  tables: IFinalTableObject[];
}

export interface IBtc_UsdState {
  dataExists: boolean;
  pages: Array<IPage>;
}

class Btc_UsdComponent extends React.Component<IBtc_UsdProps, IBtc_UsdState> {
  constructor(props: any) {
    super(props);

    this.state = { dataExists: false, pages: [] };
  }

  public componentDidMount() {
    db.ref(node_name).on("value", (snapshot) => {
      if (snapshot.exists()) {
        // let o_FinalTableObjects: IFinalTableObject[];
        let keys = Object.keys(snapshot.val());

        let nodeKeys: IPage[] = [];

        for (let i = 0; i < keys.length; i++) {
          let current = keys[i];
          const page: IPage = {
            time: current,
            imageUrl: snapshot.val()[current].imageUrl,
            tables: [
              snapshot.val()[current][moving_averages],
              snapshot.val()[current][pivot_points],
              snapshot.val()[current][technical_indicators],
            ],
          };
          nodeKeys.push(page);
          // nodeKeys.push(snapshot.val()[current]);

          // console.log();
        }

        // console.log(nodeKeys);

        this.setState({ dataExists: true, pages: nodeKeys });
      } else {
        this.setState({ dataExists: false });
      }
    });
  }

  public render() {
    return (
      <div>
        <h2 className="text-center">BTC-USD Technical</h2>
        <br />
        <br />
        {this.state.dataExists ? (
          <CardList
            dataExists={this.state.dataExists}
            pages={this.state.pages}
          />
        ) : (
          <h1 className="text-center">No data available</h1>
        )}
      </div>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Btc_Usd = withAuthorization(authCondition)(Btc_UsdComponent);
