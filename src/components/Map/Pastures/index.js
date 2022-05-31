import React from "react";
import { Main } from "./styles";

export default function Pastures({ pastureCount, pastureList }) {
  return (
    <Main div className="spot-list-area" id="sector-inspector">
      <div className="spot-list-heading" id="pastures-list-heading">
        <span>Pastures</span>
        <span id="remain-amount" ref={pastureCount}></span>
      </div>
      <div id="pastures-list" ref={pastureList}></div>
    </Main>
  );
}
