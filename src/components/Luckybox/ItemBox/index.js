import React from "react";
import { Main, Content } from "./styles";

export default function ItemBox({ options, setModal, handleScroll }) {
  const { id, name, count, price, current, startat } = options;

  const checkout = () => {
    if (count > 0) return alert("checkout");
    else return alert("Sorry, it's sold out.");
  };

  const handleModal = (id) => {
    setModal(id);
    handleScroll();
  };

  return (
    <Main>
      <Content className={count ? "" : "soldout"}>
        <div className="img-wrap">
          <img src="/Luckybox/202204_luckbox3rd.png" alt="" />
          <div className="soldout_txt">
            <div>SOLD OUT</div>
          </div>
        </div>
        <div className="probability-wrap">
          <button className="probability-btn" onClick={() => handleModal(id)}>
            Item Probability
          </button>
        </div>
        <div className="desc">
          {name}
          <br />
          <span>Random sheep</span>
          <span>+ 6 decoration</span>
          <span>
            <span>{count}</span> available
          </span>
        </div>
        <div className="sales-date-info">
          <div className="sales-period">
            <span>CURRENT</span>
            <span className="current-block-num">#{current}</span>
          </div>
          <div className="sales-period">
            <span>STARTS AT</span>
            <span>#{startat}</span>
          </div>
        </div>
        <button id="luckybox_13" className="payment-btn" onClick={checkout}>
          <span className="price">{price}</span>{" "}
          <span className="payment-symbol">
            NGIT<span></span>
          </span>
        </button>
      </Content>
    </Main>
  );
}
