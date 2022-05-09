import React, { useState, useEffect } from "react";
import KlipModal from "../../../Common/KlipModal";
import LoginBox from "../../../Common/LoginBox";
import { Main } from "./styles";

export default function PurchaseModal({
  on,
  setModal,
  item_name,
  price,
  unit,
}) {
  const [proceed, setProceed] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const [loginType, setLoginType] = useState(null);

  const handleModal = () => {
    if (window.localStorage.getItem("userID")) {
      setProceed(true);
    } else {
      setLoginModal(true);
    }
  };

  const killModal = () => {
    setProceed(false);
    setLoginModal(false);
    setModal(false);
  };

  useEffect(() => {
    const value = JSON.parse(window.localStorage.getItem("userID"));

    if (value) {
      setLoginType(value[0]);
    }
  }, []);

  return (
    <Main className={on ? "on" : "hidden"}>
      <div className="page-container">
        <div className="popup-content">
          <div className="close-btn" onClick={killModal} />
          <div className="comp-payment-receipt">
            <dl className="comp-payment-receipt-title">
              <dt>PAYMENT RECEIPT</dt>
              <dd>{item_name}</dd>
            </dl>

            <div className="payment-price-list">
              <dl className="comp-payment-price">
                <dt>Price</dt>
                <dd>
                  <span>{price}</span> MARD
                </dd>
              </dl>
              <dl className="comp-payment-price">
                <dt>Unit</dt>
                <dd>
                  <span>{unit}</span>
                </dd>
              </dl>
            </div>
            <div className="comp-dot__line"></div>
            <div className="payment-price-list">
              <dl className="comp-payment-price">
                <dt>Total</dt>
                <dd>
                  <span>{Math.round(price * unit * 1000) / 1000}</span> MARD
                </dd>
              </dl>
            </div>

            <div className="payment-btn-bx">
              <div className="proceed-btn">
                <button
                  className={["comp-btn-default", loginModal && "hidden"].join(
                    " "
                  )}
                  onClick={handleModal}
                >
                  PROCEED
                </button>
              </div>

              <div
                className={[
                  "login-wrapper",
                  loginModal && !proceed ? "" : "hidden",
                ].join(" ")}
              >
                <LoginBox type="normal" />
              </div>
            </div>
          </div>

          <img
            className="popup-content-bg img-pc"
            src="/Shop/bg_popup_shop_big.png"
            alt=""
          />
          <img
            className="popup-content-bg img-m"
            src="/Shop/bg_popup_shop_small00.png"
            alt=""
          />

          <div className="dimmed-bg"></div>
        </div>
      </div>

      {/* <div className={["login-modal", !loginModal && "hidden"].join(" ")}>
        <div className="login-wrapper">
          <LoginBox type="normal" />
        </div>
      </div> */}

      <KlipModal modal={proceed} setModal={setProceed} />
    </Main>
  );
}

/*
결제 버튼을 누르면 Receipt 가 먼저 나옴(로그인여부에 관계X)
  상품 이름 / 가격 / 개수 / 총 가격 제시
  결제 버튼
    (로그인O) > QR코드 출력해 결제 연결
    (로그인X) > 로그인 박스 출력

모바일에서는 글자가 작아짐(레이아웃 변경은 없다)
  배경 이미지로 변경되는 것 같음

받아야 할 데이터:
  - 상품 이름
  - 가격
  - 개수
*/

/* .popup-content wallet 부분은 뭔지 잘 모르겠으니 일단 주석처리 */
