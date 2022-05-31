import React, { useState, useEffect } from "react";
import KlipModal from "../KlipModal";
import { Main, WalletButton } from "./styles";

export default function LoginBox({ type }) {
  const [modal, setModal] = useState(false);
  const [userAgent, setUserAgent] = useState("pc");

  const chkUserAgent = () => {
    const UserAgent = window.navigator.userAgent;
    if (
      UserAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      setUserAgent("mobile");
    }
  };

  useEffect(() => {
    chkUserAgent();
    console.log(window.location.href.split("/").reverse()[0]);
  }, []);

  return (
    <Main type={type}>
      <div className="wallet-button-box">
        <WalletButton
          type={type}
          color="black"
          bgcolor="#FCFCFC"
          border="#D3D1D1"
          onClick={() =>
            window.open("metamast_login", "_blank", "width=363, height=623")
          }
        >
          <img src="/Header/metamask.webp" alt="" />
          <span>Connect Metamask Wallet</span>
        </WalletButton>
        {userAgent === "pc" && (
          <WalletButton
            type={type}
            color="white"
            bgcolor="#696053"
            border="#38332A"
            onClick={() => alert("Not Ready")}
          >
            <img src="/Header/kaikas.svg" alt="" />
            <span>Connect KAIKAS Wallet</span>
          </WalletButton>
        )}
        <WalletButton
          type={type}
          className="wallet-button"
          color="black"
          bgcolor={
            window.location.href.split("/").reverse()[0] === "luckybox"
              ? "#F7D621"
              : "#FAE64D"
          }
          border="#F6BA21"
          onClick={() => setModal(!modal)}
        >
          <img src="/Header/klip.svg" alt="" />
          <span>Connect with Kilp</span>
        </WalletButton>
      </div>
      <KlipModal modal={modal} setModal={setModal} />
    </Main>
  );
}
