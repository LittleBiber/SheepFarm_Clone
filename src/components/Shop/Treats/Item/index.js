import React, { useState } from "react";
import PurchaseModal from "../PurchaseModal";
import { Main } from "./styles";

export default function Item({ id, name, price, desc, desc_sub }) {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };
  const [unit, setUnit] = useState(1);

  return (
    <Main>
      <div class="item-view">
        <img src="https://cdn.sheepfarm.io/cms/item/thumb/338.png" alt="" />
      </div>

      <dl class="item-description-bx">
        <dt class="item-name">{name}</dt>
        <dd class="item-price">{price} MARD</dd>
        <dd class="item-description">
          <span>{desc}</span>
          <br />
          {desc_sub}
        </dd>
      </dl>

      <div class="item-control">
        <div class="comp-count-bx">
          <div class="comp-count" data-counter-idx="0">
            <button class="minus-btn" onClick={() => setUnit(unit - 1)}>
              -
            </button>
            <input type="text" value={unit} />
            <button class="plus-btn" onClick={() => setUnit(unit + 1)}>
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

        <div class="item-buy-btn">
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
