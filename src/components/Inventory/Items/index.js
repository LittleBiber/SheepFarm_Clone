import React, { useState, useEffect } from "react";
import LoginBox from "../../Common/LoginBox";
import ItemBox from "../ItemBox";
import { Main, ItemTable } from "./styles";

export default function Items({ selected, world }) {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const value = window.localStorage.getItem("klipID");
    if (value) setUserID(value);
  }, []);

  return (
    <Main>
      <ItemTable>
        {userID ? <ItemBox selected={selected} world={world} /> : <LoginBox />}
      </ItemTable>
    </Main>
  );
}
