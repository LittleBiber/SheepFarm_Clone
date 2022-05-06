import React, { useState } from "react";
import KlipModal from "../KlipModal";
import { Main, WalletButton } from "./styles";

export default function LoginBox() {
  const [modal, setModal] = useState(false);

  return (
    <Main>
      <div className="wallet-button-box">
        <div className="wallet-button-wrapper">
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
            <WalletButton
              color="white"
              bgcolor="#696053"
              border="#38332A"
              onClick={() => alert("Not Ready")}
            >
              <img src="/Header/kaikas.svg" />
              <span>Connect KAIKAS Wallet</span>
            </WalletButton>
            <WalletButton
              className="wallet-button"
              color="black"
              bgcolor="#FAE64D"
              border="#F6BA21"
              onClick={() => setModal(!modal)}
            >
              <img src="/Header/klip.svg" />
              <span>Connect with Kilp</span>
            </WalletButton>
          </div>
        </div>
      </div>
      <KlipModal modal={modal} setModal={setModal} />
    </Main>
  );
}
