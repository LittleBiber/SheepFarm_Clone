import React, { useState, useEffect } from "react";
import { Main, Link } from "./styles";
import { LoginBox } from "../../Common";

export default function Header({ bgcolor }) {
  const [boxOpen, setBoxOpen] = useState(false);
  const [loginType, setLoginType] = useState(null);
  const [userID, setUserID] = useState(null);

  const signOut = () => {
    localStorage.removeItem("userID");
    window.location.reload();
  };

  const curUserID = () => {
    return (
      userID.slice(0, 5) +
      "..." +
      userID.slice(userID.length - 4, userID.length)
    );
  };

  const chkHref = () => {
    const now = window.location.href.split("/").reverse()[0];
    return Boolean(now);
  };

  const clickWalletBox = () => {
    userID ? signOut() : setBoxOpen(!boxOpen);
  };

  useEffect(() => {
    const value = JSON.parse(window.localStorage.getItem("userID"));

    if (value) {
      setLoginType(value[0]);
      setUserID(value[1]);
    }
  }, []);

  return (
    <Main bgcolor={bgcolor} userID={userID}>
      <div className="menu">
        <div className="menu_box">
          <a href="/">
            <img className="logo" src="/Header/sheepfarm_logo_top.png" alt="" />
          </a>
          <div className="options">
            <Link value="map" href="/map">
              MAP
            </Link>
            <Link value="inventory" href="/inventory">
              INVENTORY
            </Link>
            <Link value="luckybox" href="/luckybox">
              LUCKYBOX
            </Link>
            <Link value="shop" href="/shop">
              SHOP
            </Link>
            <Link href="https://guide.sheepfarm.io/guide/">GUIDEBOOK</Link>
          </div>
        </div>

        <div className="login_box">
          {chkHref() ? (
            <a href="https://game.sheepfarm.io/" className="play-btn">
              <span>PLAY GAME</span>
            </a>
          ) : (
            ""
          )}
          <input type="checkbox" id="walletbox" onClick={clickWalletBox} />
          <label htmlFor="walletbox">
            <div className="wallet_web">
              <div className="wallet_icons">
                {!userID ? (
                  <img
                    className="wallet-list"
                    src="/Header/ic_wallet.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
                <img
                  className="wallet-kaikas hidden"
                  src="/Header/ic_wallet_kaikas.png"
                  alt=""
                />
                {loginType === "klip" ? (
                  <img
                    className="wallet-klip"
                    src="/Header/ic_wallet_klip.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
                {loginType === "metamask" ? (
                  <img
                    className="wallet-matamask"
                    src="/Header/ic_wallet_matamask.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
                <img
                  className="wallet-signout"
                  src="/Header/ic_wallet_close.png"
                  alt=""
                />
              </div>

              <div className="wallet-text">
                {userID ? curUserID() : "Wallet Connect"}
              </div>
            </div>
          </label>
        </div>

        <div
          className={["loginbox-wrapper", !boxOpen ? "login_off" : ""].join(
            " "
          )}
        >
          <LoginBox type="normal" />
        </div>
      </div>
    </Main>
  );
}
