import React, { useState } from "react";
import { Main } from "./styles";

export default function Upgrades() {
  const [itemBox, setItemBox] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <Main>
      <div className="upgrades-select-container">
        <div className="comp-select">
          <div className="comp-select-bx">
            <div className="comp-select-item" onclick="showMainPopup()">
              <div className="select-box">
                <span className="on">
                  Select An Item
                  <br />
                  To Upgrade
                </span>
              </div>
            </div>

            <img
              className="comp-select-bg"
              src="/Upgrades/img_item_select_bg.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="upgrades-ic-plus">
        <img src="/Upgrades/ic_plus.png" alt="" />
      </div>

      <div className="upgrades-select-list">
        <div className="upgrades-select-list-bx">
          <ul>
            {itemBox.map((one, idx) => (
              <li key={idx}>
                <div>
                  <span>Select An Item</span>
                  <img src="/Upgrades/img_item_sample.png" alt="" />
                </div>
                <div className="__grade"></div>
                <div className="__numbering"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="upgrades-gage">
        <div className="upgrades-gage-bx">
          <div className="upgrades-gage__txt">
            <span>Boost Meter</span>
          </div>
          <div className="upgrades-gage-bx">
            <img
              className="img-pc"
              src="img/shop/img_upgrades_gage.png"
              alt=""
            />
            <img
              className="img-m"
              src="img/shop/img_upgrades_gage_m.png"
              alt=""
            />
          </div>
          <div className="upgrades-gage-bg"></div>
        </div>

        <div className="upgrades-gage__info">
          Boost your upgrade success by adding more materials.
        </div>
      </div>

      <div className="upgrades-btn-bx">
        <div className="comp-btn-default">
          <button className="button-disabled">Upgrade</button>
          <div>1 MARD</div>
        </div>
      </div>
      <div className="maintenance">Under maintenance</div>
    </Main>
  );
}
