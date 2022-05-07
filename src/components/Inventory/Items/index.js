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
      {/* comp-sub-wrap */}
      <ItemTable>
        {/* comp-sub-content */}
        {userID ? (
          <ItemBox selected={selected} world={world} />
        ) : (
          <div className="comp-sign-in">
            <div className="comp-sign-in--bx">
              <div className="wallet-btns">
                <LoginBox type="big" />
              </div>
            </div>
          </div>
        )}
      </ItemTable>
    </Main>
  );
}
