import React, { useState, useRef } from "react";
import PurchaseModal from "../PurchaseModal";
import { Main } from "./styles";

export default function Item({ id, name, price, desc, desc_sub }) {
  const Count = useRef(null);
  const [unit, setUnit] = useState(1);

  const [modal, setModal] = useState(false);

  const body = document.getElementsByTagName("body")[0]; // DOM말고는 body에 접근할수 없는건가?
  const [height, setHeight] = useState(0);
  const handleModal = () => {
    const nowHeight = window.scrollY;

    console.log(nowHeight);

    body.style.top = `-${nowHeight}px`; //!반대로!반대로주라고!!!!
    body.style.position = "fixed";
    body.style["overflow-y"] = "hidden";
    setHeight(nowHeight);
    setModal(true);
  };

  const handleUnit = (event) => {
    const value = event.target.value;
    /*
    1. 0~9 사이 숫자만 입력 가능
    2. 음수는 안됨
    3. 백스페이스로 삭제가 가능해야 함.

    !대체 e는 왜 들어가는거지... 큰 수 표현 때문인듯
    */

    console.log(value, typeof value);
    let result = "";
    if (value[0] !== "0") result += value[0];
    for (let i = 1; i < value.length; i++) {
      if (!Number.isNaN(Number(value[i]))) result += value[i];
    }

    if (Number.isNaN(Number(result))) result = 0;

    setUnit(result);
  };

  const plus_minus = (value) => {
    if (value < 0) return;
    setUnit(value);
  };

  return (
    <Main modal={modal}>
      <div className="item-view">
        <img src="https://cdn.sheepfarm.io/cms/item/thumb/338.png" alt="" />
      </div>

      <dl className="item-description-bx">
        <dt className="item-name">{name}</dt>
        <dd className="item-price">{price} MARD</dd>
        <dd className="item-description">
          <span>{desc}</span>
          <br />
          {desc_sub}
        </dd>
      </dl>

      <div className="item-control">
        <div className="comp-count-bx">
          <div className="comp-count">
            <button className="minus-btn" onClick={() => plus_minus(unit - 1)}>
              -
            </button>
            <input
              type="number"
              value={unit}
              pattern="\d*"
              ref={Count}
              onChange={handleUnit}
            />
            <button className="plus-btn" onClick={() => plus_minus(unit + 1)}>
              +
            </button>
          </div>

          <dl className="total-price">
            <dt>Total</dt>
            <dd>
              <span>{Math.round(price * unit * 1000) / 1000}</span> MARD
            </dd>
          </dl>
        </div>

        <div className="item-buy-btn">
          <button data-id={id} onClick={handleModal}>
            Purchase
          </button>
        </div>
      </div>
      <PurchaseModal
        on={modal}
        setModal={setModal}
        item_name={name}
        price={price}
        unit={unit}
        height={height}
      />
    </Main>
  );
}

/*

*/
