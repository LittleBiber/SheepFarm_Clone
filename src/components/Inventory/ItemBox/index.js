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
              className={!world && "on"}
            />
            <img
              src="/ItemBox/img_message02.png"
              alt=""
              className={world && "on"}
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

/*
여기서 물건이 있을때를 고려해서 구조를 만들어야 함
- item 이 있을때 고려해야 할 점 (대충 생각했을때)
  1. 이미지
  2. 이름
  3. 개수

- 구현하려면?
  1. 박스에 이미지 - 이름(dt) - 개수(dd) 구조로 집어넣을 수 있을 듯
*/

/*
720px 기준 레이아웃 변경
*/
