import React from "react";
import { IPage } from "../pages/PageNames/Btc_Usd";
import "../../src/Login.css";

import { Redirect } from "react-router-dom";
import { RENDER_PAGE } from "../constants/routes";

interface CardProps {
  page: IPage;
}

interface CardState {
  clicked: boolean;
}

class Card extends React.Component<CardProps, CardState> {
  timeConverter(UNIX_timestamp: string) {
    // console.log(UNIX_timestamp);

    let time = new Date(Number.parseInt(UNIX_timestamp)).toLocaleTimeString(
      "en-US"
    );
    let date = new Date(Number.parseInt(UNIX_timestamp)).toLocaleDateString(
      "en-US"
    );

    return `${date} ${time}`;
  }

  constructor(props: CardProps, state: CardState) {
    super(props, state);

    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <Redirect to={{ pathname: RENDER_PAGE, state: this.props }} />
        ) : (
          <div
            onClick={() => this.setState({ clicked: true })}
            className="card-container"
          >
            <img
              height="500px"
              width="500px"
              alt="page"
              src={`${this.props.page.imageUrl}`}
            />
            <br />
            <h4>Date Visited: {this.timeConverter(this.props.page.time)}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Card;

/* <RenderPage
        imageUrl={props.imageUrl}
        tables={props.tables}
        time={props.time}
      /> */

// export const Card = (props: IPage) => {
//   let clicked = false;
//   function onCardClicked(page: IPage) {
//     clicked = true;
//   }

//   return (
//     // <Link
//     //   to={{
//     //     pathname: RENDER_PAGE,
//     //     state: {
//     //       props: props,
//     //     },
//     //   }}
//     //   component={RenderPage}
//     // >
//     //   <div className="card-container">
//     //     <img
//     //       height="500px"
//     //       width="500px"
//     //       alt="page"
//     //       src={`${props.imageUrl}`}
//     //     />
//     //     <br />
//     //     <h4>Date Visited: {timeConverter(props.time)}</h4>
//     //   </div>
//     // </Link>

//     <div>
//       {clicked ? (
//         "ffdb"
//       ) : (
//         <div onClick={() => onCardClicked(props)} className="card-container">
//           <img
//             height="500px"
//             width="500px"
//             alt="page"
//             src={`${props.imageUrl}`}
//           />
//           <br />
//           <h4>Date Visited: {timeConverter(props.time)}</h4>
//         </div>
//       )}
//     </div>
//   );
// };
