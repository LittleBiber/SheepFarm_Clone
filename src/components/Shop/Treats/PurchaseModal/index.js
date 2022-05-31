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
  height,
}) {
  const [proceed, setProceed] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loginType, setLoginType] = useState(null);
  const body = document.getElementsByTagName("body")[0];

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

    body.style.top = "unset";
    body.style.position = "unset";
    body.style["overflow-y"] = "unset";
    window.scrollTo(0, height);
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

          <div className="dimmed-bg" onClick={killModal}></div>
        </div>
      </div>

      <KlipModal modal={proceed} setModal={setProceed} />
    </Main>
  );
}
