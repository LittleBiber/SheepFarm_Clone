import React from "react";
import { Main, Content } from "./styles";

export default function ItemBox({
  id,
  name,
  count,
  price,
  current,
  startat,
  setModal,
}) {
  // const count = 0; // 나중에 데이터 제대로 넘겨받으면 전부 없애야 함

  const checkout = () => {
    if (count > 0) return alert("checkout");
    else return alert("Sorry, it's sold out.");
  };

  return (
    <Main>
      <Content className={count ? "" : "soldout"}>
        <div className="img-wrap">
          <img src="/Luckybox/202204_luckbox3rd.png" />
          <div className="soldout_txt">
            <div>SOLD OUT</div>
          </div>
        </div>
        <div className="probability-wrap">
          <button className="probability-btn" onClick={() => setModal(id)}>
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
            {/*style="color: #FFA6A6;"*/}
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

/*
PC버전:
  - 박스: 테두리 그림자 있음 / 매진된 경우 회색, 재고 있으면 색상 있음 (class로 재고개수에 반응하게 만들어야 할듯)
  - 이미지: 매진된 경우 SOLD OUT 띠가 이미지 위에 나옴
  - Probability: 클릭시 모달로 아이템 상태를 보여줌(배경 or X버튼 클릭하면 꺼짐)
  - 아이템 설명: 설명과 사용가능한 개수 데이터 보여줌
  - 가격: 현재가격 / 최소가격(?) 을 보여주는 것 같음 > 지속적으로 변동됨 :(
  - 가격과 구매 버튼(클릭 시 결제로 넘어가는듯, 현재는 sold out이라고 alert 나옴)
*/
