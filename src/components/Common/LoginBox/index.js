import React, { useState } from "react";
import KlipModal from "../KlipModal";
import { Main, WalletButton } from "./styles";

export default function LoginBox({ type }) {
  const [modal, setModal] = useState(false);

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
          <img src="/Header/metamask.webp" />
          <span>Connect Metamask Wallet</span>
        </WalletButton>
        <WalletButton
          type={type}
          color="white"
          bgcolor="#696053"
          border="#38332A"
          onClick={() => alert("Not Ready")}
        >
          <img src="/Header/kaikas.svg" />
          <span>Connect KAIKAS Wallet</span>
        </WalletButton>
        <WalletButton
          type={type}
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
      <KlipModal modal={modal} setModal={setModal} />
    </Main>
  );
}

/*
??? 내가 잘못 봤던가 왜 디자인이 달라진거같지...

타입은 3가지가 있음 normal / big / nobackground
props로 받아서 사이즈 할당하면 될듯
*/
