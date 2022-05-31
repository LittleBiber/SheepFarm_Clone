import React from "react";
import { Main } from "./styles";

export default function Selector({ select, setSelect }) {
  const Menu = ["Sweet Treats", "Sheep Morphing", "Decor Upgrades"];

  return (
    <Main>
      {Menu.map((one, idx) => (
        <div
          className={idx === select ? "active" : ""}
          key={idx}
          onClick={() => setSelect(idx)}
        >
          {one}
        </div>
      ))}
    </Main>
  );
}
