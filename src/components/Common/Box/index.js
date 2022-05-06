import React from "react";
import { Main } from "./styles";

export default function Box({ title, desc, img, bgcolor, border, color }) {
  return (
    <Main bgcolor={bgcolor} color={color} border={border}>
      <img src={img} alt="land" />
      <div className="box_title">{title}</div>
      <div className="box_desc">{desc}</div>
    </Main>
  );
}
