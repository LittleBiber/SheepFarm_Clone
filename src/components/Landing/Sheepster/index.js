import React from "react";
import { Title } from "../../../styles/index";
import { Main, SheepsterTitle } from "./styles";

export default function Sheepster() {
  return (
    <Main>
      <div className="page-container">
        <SheepsterTitle>BECOME A "SHEEPSTER"</SheepsterTitle>
        <div className="sheepster_board">
          <img src="/Sheepster/sheepster-board.png" alt="board" />
          <div className="sheepster_apply">
            <a
              href="https://survey.typeform.com/to/Y04a4sh1"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <img
        className="bottom_left"
        src="/Sheepster/sheepster-bg1.png"
        alt="bg1"
      />
      <img
        className="bottom_right"
        src="/Sheepster/sheepster-bg2.png"
        alt="bg2"
      />
    </Main>
  );
}
