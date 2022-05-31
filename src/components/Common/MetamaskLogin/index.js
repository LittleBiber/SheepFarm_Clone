import React from "react";
import { Main } from "./styles";

// QR클릭하면 더미 지갑주소 로컬스토리지에 저장하고 새로고침 시키기
// 시간적 여유 되면 Redux로 변경

export default function MetamaskLogin() {
  const cancelLogin = () => {
    window.close();
  };

  const DummyLogin = () => {
    const dummyUserID = JSON.stringify([
      "metamask",
      String(
        Math.random().toString(36).substr(2, 11) +
          Math.random().toString(36).substr(2, 11)
      ),
    ]);
    localStorage.setItem("userID", dummyUserID);
    window.opener.parent.location.reload();
    window.close();
  };

  return (
    <Main>
      <div className="header">
        <div className="header-background"></div>
        <div className="header-text">서명 요청</div>
        <div className="header-tip-container">
          <div className="header-tip"></div>
        </div>
      </div>
      <div className="content">
        <div className="account-info">
          <div className="account">
            <div className="account-text">계정:</div>
            <div className="account-item">
              <div className="account-list-item">
                <div className="account-list-item__top-row">
                  <div>
                    <svg x="0" y="0" width="18" height="18">
                      <rect
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                        transform="translate(-4.017173839017149 -3.1967769074120764) rotate(251.4 9 9)"
                        fill="#187DF2"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                        transform="translate(-7.030257492003607 -12.059736705372599) rotate(327.2 9 9)"
                        fill="#234CE1"
                      ></rect>
                    </svg>
                  </div>
                  <div>Account 1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="request-icon">
            <div className="identicon__image-border" />
          </div>
          <div className="balance">
            <div className="balance-text">잔액:</div>
            <div className="balance-value">0 KLAY</div>
          </div>
        </div>
        <div className="origin-row">
          <div className="request-signature__origin-label">원본:</div>
          <div className="request-signature__origin">https://sheepfarm.io</div>
        </div>
        <div className="notice">서명 중입니다.:</div>
        <div className="signature-rows">
          {/* 여러 개의 메세지가 들어오는 경우를 위해 분리 */}
          <div className="signature-row">
            <div className="row-title">메시지:</div>
            <div className="row-value">
              0x106adc0a00a6ee29af40e9969a27568e989c76aeb3ee2e70d78ce01478552f05
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="cancel-button" role="button" onClick={cancelLogin}>
          취소
        </button>
        <button className="sign-button" role="button" onClick={DummyLogin}>
          서명
        </button>
      </div>
    </Main>
  );
}
