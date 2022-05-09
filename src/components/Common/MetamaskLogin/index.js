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
      <div class="header">
        <div class="header-background"></div>
        <div class="header-text">서명 요청</div>
        <div class="header-tip-container">
          <div class="header-tip"></div>
        </div>
      </div>
      <div class="content">
        <div class="account-info">
          <div class="account">
            <div class="account-text">계정:</div>
            <div class="account-item">
              <div class="account-list-item">
                <div class="account-list-item__top-row">
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
                        transform="translate(-11.565725505812066 0.6925293459167888) rotate(256.3 9 9)"
                        fill="#F5E400"
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
          <div class="request-icon">
            <div class="identicon__image-border" />
          </div>
          <div class="balance">
            <div class="balance-text">잔액:</div>
            <div class="balance-value">0 KLAY</div>
          </div>
        </div>
        <div class="origin-row">
          <div class="request-signature__origin-label">원본:</div>
          <div class="request-signature__origin">https://sheepfarm.io</div>
        </div>
        <div class="notice">서명 중입니다.:</div>
        <div class="signature-rows">
          {/* 여러 개의 메세지가 들어오는 경우를 위해 분리 */}
          <div class="signature-row">
            <div class="row-title">메시지:</div>
            <div class="row-value">
              0x106adc0a00a6ee29af40e9969a27568e989c76aeb3ee2e70d78ce01478552f05
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <button class="cancel-button" role="button" onClick={cancelLogin}>
          취소
        </button>
        <button
          class="sign-button"
          data-testid="request-signature__sign"
          role="button"
          onClick={DummyLogin}
        >
          서명
        </button>
      </div>
    </Main>
  );
}

/*

<body className="notification">
    <div id="app-content">
      <img id="loading__logo" src="./images/logo/metamask-fox.svg" alt="">
      <img id="loading__spinner" src="./images/spinner.gif" alt="">
    </div>
    <div id="popover-content"></div>
    <script src="./globalthis.js" type="text/javascript" charset="utf-8"></script>
    <script src="./sentry-install.js" type="text/javascript" charset="utf-8"></script>
          <script src="./lockdown-install.js" type="text/javascript" charset="utf-8"></script>
      <script src="./lockdown-run.js" type="text/javascript" charset="utf-8"></script>
      <script src="./lockdown-more.js" type="text/javascript" charset="utf-8"></script>
      <script src="./runtime-cjs.js" type="text/javascript" charset="utf-8"></script>
              <script src="./common-0.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-1.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-2.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-3.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-4.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-5.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-6.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-7.js" type="text/javascript" charset="utf-8"></script>
          <script src="./common-8.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-0.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-1.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-2.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-3.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-4.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-5.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-6.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-7.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-8.js" type="text/javascript" charset="utf-8"></script>
          <script src="./ui-9.js" type="text/javascript" charset="utf-8"></script>
      

</body>

*/
