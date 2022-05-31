import React from "react";
import { Main } from "./styles";

export default function Box({ options }) {
  return (
    <Main {...options}>
      <img src={options.img} alt="land" />
      <div className="box_title">{options.title}</div>
      <div className="box_desc">{options.desc}</div>
    </Main>
  );
}
