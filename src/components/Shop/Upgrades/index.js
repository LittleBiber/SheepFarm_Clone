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
      <div class="upgrades-select-container">
        <div class="comp-select">
          <div class="comp-select-bx">
            <div class="comp-select-item" onclick="showMainPopup()">
              <div className="select-box">
                <span class="on">
                  Select An Item
                  <br />
                  To Upgrade
                </span>

                <img class="" src="/Upgrades/img_sample.png" alt="" />

                <div class="__grade"></div>
                <div class="__numbering"></div>
              </div>
            </div>

            <img
              class="comp-select-bg"
              src="/Upgrades/img_item_select_bg.png"
              alt=""
            />
          </div>

          <div class="comp-select__item--name"></div>
        </div>
      </div>

      <div class="upgrades-ic-plus">
        <img src="/Upgrades/ic_plus.png" alt="" />
      </div>

      <div class="upgrades-select-list">
        <div class="upgrades-select-list-bx">
          <ul>
            {itemBox.map((one, idx) => (
              <li key={idx}>
                <div>
                  <span>Select An Item</span>
                  <img src="/Upgrades/img_item_sample.png" alt="" />
                </div>
                <div class="__grade"></div>
                <div class="__numbering"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="upgrades-gage">
        <div class="upgrades-gage-bx">
          <div class="upgrades-gage__txt">
            <span>Boost Meter</span>
          </div>

          <div class="upgrades-gage-bx">
            {/* 이거 HTML에 guage 태그 있는데... */}
            <img class="img-pc" src="/Upgrades/img_upgrades_gage.png" alt="" />
            <img class="img-m" src="/Upgrades/img_upgrades_gage_m.png" alt="" />
          </div>

          <div class="upgrades-gage-bg"></div>
        </div>

        <div class="upgrades-gage__info">
          Boost your upgrade success by adding more materials.
        </div>
      </div>

      <div class="upgrades-btn-bx">
        <div class="comp-btn-default">
          <button onclick="upgrade()" className="button-disabled">
            Upgrade
          </button>
          <div>1 MARD</div>
        </div>
      </div>
      <div className="maintenance">Under maintenance</div>
    </Main>
  );
}
