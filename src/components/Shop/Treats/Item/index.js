import React, { useState, useRef } from "react";
import PurchaseModal from "../PurchaseModal";
import { Main } from "./styles";

export default function Item({ id, name, price, desc, desc_sub }) {
  const Count = useRef(null);
  const [unit, setUnit] = useState(1);

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  const handleUnit = (event) => {
    console.log(typeof event.key);
    if (Number(event.key) >= 0 && Number(event.key) <= 9) {
      setUnit(Count.current.value * 10 + Number(event.key));
      return true;
    }
    return false;
  };

  const plus_minus = (value) => {
    if (value < 0) return;
    setUnit(value);
  };

  return (
    <Main>
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
              onKeyPress={handleUnit}
              ref={Count}
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
      />
    </Main>
  );
}

/*

*/
