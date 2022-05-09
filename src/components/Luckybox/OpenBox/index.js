import React, { useState, useEffect } from "react";
import { Main } from "./styles";
import LoginBox from "../../Common/LoginBox";

export default function OpenBox() {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const value = window.localStorage.getItem("userID");
    if (value) setUserID(value);
  }, []);

  return (
    <Main>
      {userID ? (
        <>
          <img id="noitem" src="/Luckybox/noitems_NPC.png" />
          <div className="no-box-text">
            <img src="/Luckybox/no-luckybox-bg.png" />
            <div>
              <span>You don't have</span>
              <span>any Lucky boxes</span>
            </div>
          </div>
        </>
      ) : (
        <LoginBox type="no_background" />
      )}
    </Main>
  );
}

/*

*/
