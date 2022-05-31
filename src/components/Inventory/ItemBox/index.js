import React, { useState } from "react";
import { ItemList, ProductList, SelectAll } from "./styles";

export default function ItemBox({ selected, world }) {
  const [checkall, setCheckAll] = useState(false);

  return (
    <>
      <SelectAll>
        <div className="cx-wrapper">
          <input
            id="select-all"
            type="checkbox"
            onClick={() => setCheckAll(!checkall)}
          />
          <label htmlFor="select-all">
            <div className="selectall-checkbox">
              <img
                className={checkall ? "" : "hidden"}
                src="/ItemBox/ic_product_check_on.png?v=1"
                alt="check"
              />
              <img src="/ItemBox/ic_product_check_off.png?v=1" alt="check" />
            </div>
          </label>
        </div>
        <div className="selectall-text">Select All</div>
      </SelectAll>
      <ProductList />
      <ItemList>
        <dl>
          <dt className="img-messages">
            <img
              src="/ItemBox/img_message01.png"
              alt=""
              className={!world ? "on" : "hidden"}
            />
            <img
              src="/ItemBox/img_message02.png"
              alt=""
              className={world ? "on" : "hidden"}
            />
          </dt>
          <dd>
            {world ? (
              <span className="message-text">
                You don’t have any items to <br /> send to the real-world
              </span>
            ) : (
              <span className="message-text">
                You don’t have any items to <br /> send to Meta-land
              </span>
            )}
          </dd>
        </dl>
      </ItemList>
    </>
  );
}
