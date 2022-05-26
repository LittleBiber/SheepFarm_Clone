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

  const handleUnit = (value) => {
    if (unit === 0 && value === -1) return setUnit(0);
    else if (value === "") return setUnit(0);
    else setUnit(value);
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
            <button className="minus-btn" onClick={() => handleUnit(unit - 1)}>
              -
            </button>
            <input
              type="number"
              value={unit}
              onChange={(e) => handleUnit(e.target.value)}
              ref={Count}
            />
            <button className="plus-btn" onClick={() => handleUnit(unit + 1)}>
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
