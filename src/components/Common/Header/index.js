import React, { useState, useEffect } from "react";
import KlipModal from "../../Common/KlipModal";
import { Main, Link, WalletButton } from "./styles";
import LoginBox from "../../Common/LoginBox";

export default function Header({ bgcolor }) {
  const [boxOpen, setBoxOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const [userID, setUserID] = useState(null);

  const signOut = () => {
    localStorage.removeItem("klipID");
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
    const value = window.localStorage.getItem("klipID");
    if (value) setUserID(value);
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

        <div class="login_box">
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
                className={["wallet-klip", !userID && "hidden"].join(" ")}
                src="/Header/ic_wallet_klip.png"
                alt=""
              />
              <img
                className={["wallet-matamask", "hidden"].join(" ")}
                src="/Header/ic_wallet_matamask.png"
                alt=""
              />
              <img
                className="wallet-signout"
                src="/Header/ic_wallet_close.png"
                alt=""
              />

              <div className="wallet-text">
                {userID ? curUserID() : "Wallet Connect"}
              </div>
            </div>
          </label>
        </div>

        <div
          className={["loginbox-wrapper", !boxOpen ? "hidden" : ""].join(" ")}
        >
          <LoginBox type="normal" />
        </div>

        {/* <div id="wallet-button-wrapper" className={!boxOpen ? "hidden" : ""}>
          <div className="btns">
            <WalletButton
              color="black"
              bgcolor="#FCFCFC"
              border="#D3D1D1"
              onClick={() => alert("Not Ready")}
            >
              <img src="/Header/metamask.webp" />
              <span>Connect Metamask Wallet</span>
            </WalletButton>
            <WalletButton color="white" bgcolor="#696053" border="#38332A">
              <img src="/Header/kaikas.svg" />
              <span>Connect KAIKAS Wallet</span>
            </WalletButton>
            <WalletButton
              color="black"
              bgcolor="#FAE64D"
              border="#F6BA21"
              onClick={() => setModal(!modal)}
            >
              <img src="/Header/klip.svg" />
              <span>Connect with Kilp</span>
            </WalletButton>
          </div>
        </div> */}
      </div>
      {/* <KlipModal modal={modal} setModal={setModal} /> */}
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
