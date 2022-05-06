import React from "react";
import { Main } from "./styles";

export default function Selector({ select, setSelect }) {
  return (
    <Main>
      <span class={select ? "" : "active"} onClick={() => setSelect(0)}>
        Purchase
      </span>
      <span class={select ? "active" : ""} onClick={() => setSelect(1)}>
        Open
      </span>
    </Main>
  );
}
