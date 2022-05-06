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

/*
a태그 href로 주소를 바꿔서 보여주는데 State로 새로고침 없이 변경하는 편이 좋지 않을까?
*/
