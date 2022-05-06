import React from "react";
import { Main } from "./styles";

export default function Box({
  title,
  desc,
  img,
  bgcolor,
  border,
  color,
  offset,
}) {
  return (
    <Main bgcolor={bgcolor} color={color} border={border} offset={offset}>
      <img src={img} alt="land" />
      <div className="box_title">{title}</div>
      <div className="box_desc">{desc}</div>
    </Main>
  );
}
