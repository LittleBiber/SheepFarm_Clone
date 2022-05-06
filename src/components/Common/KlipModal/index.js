import React from "react";
import { Main } from "./styles";

// QR클릭하면 더미 지갑주소 로컬스토리지에 저장하고 새로고침 시키기
// 시간적 여유 되면 Redux로 변경

export default function KlipModal({ modal, setModal }) {
  const DummyLogin = () => {
    localStorage.setItem(
      "klipID",
      Math.random().toString(36).substr(2, 11) +
        Math.random().toString(36).substr(2, 11)
    );
    window.location.reload();
  };

  return (
    <Main className={modal ? "" : "hidden"}>
      <div className="modal-container">
        <img
          className="ic-close"
          src="/KlipModal/icon-close.svg"
          onClick={() => setModal(!modal)}
        />
        <div className="modal-title">
          <img src="/KlipModal/icon-klip.svg" />
          Connect Klip via Kakao
        </div>
        <div id="klip-qr-code">
          <img src="/KlipModal/dummyQR.png" alt="dummy" onClick={DummyLogin} />
        </div>
        <div className="modal-warning">
          Scan QR code with camera app or KakaoTalk code scan
        </div>
      </div>
    </Main>
  );
}
