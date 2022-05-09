import React, { useState, useEffect } from "react";
import { Main, Link } from "./styles";
import LoginBox from "../../Common/LoginBox";

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
            <img className="logo" src="/Header/sheepfarm_logo_top.png" />
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
          <a
            href="https://game.sheepfarm.io/"
            className={["play-btn", !chkHref() && "hidden"].join(" ")}
          >
            <span>PLAY GAME</span>
          </a>
          <input
            type="checkbox"
            id="walletbox"
            onClick={userID ? signOut : () => setBoxOpen(!boxOpen)}
          />
          <label htmlFor="walletbox">
            <div className="wallet_web">
              <div className="wallet_icons">
                <img
                  className={["wallet-list", userID && "hidden"].join(" ")}
                  src="/Header/ic_wallet.png"
                  alt=""
                />
                <img
                  className={["wallet-kaikas", "hidden"].join(" ")}
                  src="/Header/ic_wallet_kaikas.png"
                  alt=""
                />
                <img
                  className={[
                    "wallet-klip",
                    loginType !== "klip" && "hidden",
                  ].join(" ")}
                  src="/Header/ic_wallet_klip.png"
                  alt=""
                />
                <img
                  className={[
                    "wallet-matamask",
                    loginType !== "metamask" && "hidden",
                  ].join(" ")}
                  src="/Header/ic_wallet_matamask.png"
                  alt=""
                />
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

/*
- 지갑 연결 시도
  > 클립 제외하고 전부 오류남(???대체 왜지)
  > 클립은 클릭하면 모달로 QR을 보여줌
    로그인되면 연결 버튼의 지갑 이미지는 클립 이미지로, 문자열은 지갑주소로 변경
    호버 시 클립 이미지가 X로 바뀜
    버튼 클릭 시 로그아웃됨
*/
