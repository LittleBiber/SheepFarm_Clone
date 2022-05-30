import React, { useState, useEffect } from "react";
import KlipModal from "../../Common/KlipModal";
import { MobileMenuBar, MobileMenu, Link, MobileWallet } from "./styles";

export default function MobileHeader({ bgcolor }) {
  const [open, setOpen] = useState(false);
  const [walletBox, setWalletBox] = useState(false);
  const [modal, setModal] = useState(false);

  const [loginType, setLoginType] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const value = JSON.parse(window.localStorage.getItem("userID"));
    if (value) {
      setLoginType(value[0]);
      setUserID(value[1]);
    }
  }, []);

  const [height, setHeight] = useState(0);
  const handleOpen = () => {
    const body = document.getElementsByTagName("body")[0];

    if (open) {
      body.style.top = "unset";
      body.style.position = "unset";
      body.style["overflow-y"] = "unset";
      window.scrollTo(0, height);
    } else {
      const nowHeight = window.scrollY;
      body.style.top = `-${nowHeight}px`;
      body.style.position = "fixed";
      body.style["overflow-y"] = "hidden";
      setHeight(nowHeight);
    }

    setOpen(!open);
    setWalletBox(false);
  };

  const handleLoginModal = () => {
    setWalletBox(!walletBox);
  };

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

  const copyLink = () => {
    const link = "https://sheepfarm.io";
    navigator.clipboard.writeText(link);
    alert("copied!");
  };

  return (
    <>
      <MobileMenuBar open={open} bgcolor={bgcolor}>
        <a className="button-top shared" onClick={copyLink} />
        <a href="/">
          <img className="logo" src="/MobileHeader/sheepfarm_logo_top.png" />
        </a>
        <a className="button-top menu" onClick={handleOpen} />
      </MobileMenuBar>

      <MobileMenu open={open}>
        <div className={["mobile-menu", walletBox && "display-hide"].join(" ")}>
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
          <span className="wallet" onClick={handleLoginModal}>
            <img src="/MobileHeader/ic_wallet_main_m.svg" />
            <span>Connect Wallet</span>
          </span>
        </div>

        <MobileWallet walletBox={walletBox}>
          <span className="wallet-title" onClick={handleLoginModal}>
            &lt; Connect Wallet
          </span>
          <div className="wallet-btns">
            <button
              className="wallet-btn"
              id="metamask-btn"
              onClick={
                loginType === "metamask"
                  ? signOut
                  : () =>
                      window.open(
                        "metamast_login",
                        "_blank",
                        "width=363, height=623"
                      )
              }
            >
              <img src="/MobileHeader/metamask.webp" />
              <span>
                {loginType === "metamask"
                  ? curUserID()
                  : "Connect Metamask Wallet"}
              </span>
            </button>
            <button
              className="wallet-btn"
              id="klip-btn"
              onClick={loginType === "klip" ? signOut : () => setModal(!modal)}
            >
              <img src="/MobileHeader/klip.svg" />
              <span>
                {loginType === "klip" ? curUserID() : "Connect with Kilp"}
              </span>
            </button>
            <button className="disconnect-btn" onClick={signOut}>
              Disconnect
            </button>
          </div>
        </MobileWallet>
      </MobileMenu>

      <KlipModal modal={modal} setModal={setModal} />
    </>
  );
}

/*
- 모바일 버전이라 햄버거 메뉴 들어감
- 이전 클론코딩에서 제대로 못 따라했던 부분이므로 이번에 만들어보면서 구조를 익혀야 할듯

- 로그인 파트
  - 여전히 Metamask는 아무것도 없음
  - 카이카스는 아예 존재하지도 않음(주석처리로 비활성화됨)
  - Klip 연결은 가능 / 연결하면 PC처럼 지갑주소를 ㅁㅁㅁㅁㅁ...ㅁㅁㅁㅁ 형식으로 보여줌
  - Disconnect는 항상 보임
*/
