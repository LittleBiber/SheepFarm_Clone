import React from "react";
import Item from "./Item";
import { Main } from "./styles";
import { ITEM_LIST } from "./dummy";

export default function Treats() {
  return (
    <Main>
      {ITEM_LIST.map((one, idx) => (
        <li key={idx}>
          <Item {...one} />
        </li>
      ))}
    </Main>
  );
}

/*

*/
