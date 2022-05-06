import React from "react";
import Item from "./Item";
import { Main } from "./styles";

export default function Treats() {
  const ITEM_LIST = [
    {
      id: 111,
      name: "Bitter Bon Bon",
      price: 0.025,
      desc: "Well, Chocolate is chocolate",
      desc_sub: "(Restores hunger for 8 hours)",
    },
    {
      id: 222,
      name: "Spicy Bon Bon",
      price: 0.035,
      desc: "Hot candy",
      desc_sub: "(Restores hunger for 8 hours)",
    },
    {
      id: 333,
      name: "Sweet Bon Bon",
      price: 0.045,
      desc: "Sweet Chocolate",
      desc_sub: "(Restores hunger for 8 hours)",
    },
  ];

  return (
    <Main>
      {ITEM_LIST.map((one, idx) => (
        <li>
          <Item {...one} key={idx} />
        </li>
      ))}
    </Main>
  );
}

/*

*/
