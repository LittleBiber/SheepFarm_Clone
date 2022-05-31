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
        <div className="button-top shared" onClick={copyLink} />
        <a href="/">
          <img
            className="logo"
            src="/MobileHeader/sheepfarm_logo_top.png"
            alt=""
          />
        </a>
        <div className="button-top menu" onClick={handleOpen} />
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
            <img src="/MobileHeader/ic_wallet_main_m.svg" alt="" />
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
              <img src="/MobileHeader/metamask.webp" alt="" />
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
              <img src="/MobileHeader/klip.svg" alt="" />
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
