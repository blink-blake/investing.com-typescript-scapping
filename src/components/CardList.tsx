import React from "react";
import "../../src/Login.css";
import { IBtc_UsdState } from "../pages/PageNames/Btc_Usd";
import Card from "./CardComponent";

export const CardList = (props: IBtc_UsdState) => {
  //   console.log(props.pages);
  return (
    <div className="card-list">
      {props.pages.map((page) => (
        <Card key={page.time} page={page} />
      ))}
    </div>
  );
};
