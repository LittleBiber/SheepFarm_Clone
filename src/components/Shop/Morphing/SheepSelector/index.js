import React, { useState } from "react";
import SelectSheepModal from "../SelectSheepModal";
import { Main, ButtonBox } from "./styles";

export default function SheepSelector() {
  const [modal, setModal] = useState(false);

  const [sheep, setSheep] = useState({ male: null, female: null });
  const checkSheep = () => {
    return sheep.male && sheep.female;
  };

  return (
    <>
      <Main>
        <div className="comp-select Male">
          <div className="comp-select-bx">
            <div className="comp-select-item" onClick={() => setModal("Male")}>
              <div>
                {/* <!-- class :on --> */}
                <span className="on">
                  <img src="/Morphing/ic_male.png" alt="" />
                  <p>Select Male Sheep</p>
                </span>
                {/* <!-- class :on --> */}
                <img src="empty" alt="" />
              </div>
            </div>

            <img
              className="comp-select-bg"
              src="/Morphing/img_item_select_bg.png"
              alt=""
            />
          </div>

          {/* <!-- class :on --> */}
          <div className="comp-select__item--name">Name #001</div>
        </div>

        <img className="morphing-plus" src="/Morphing/ic_plus.png" alt="" />

        <div className="comp-select Female">
          <div className="comp-select-bx">
            <div
              className="comp-select-item"
              onClick={() => setModal("Female")}
            >
              <div>
                {/* <!-- class :on --> */}
                <span className="on">
                  <img src="/Morphing/ic_female.png" alt="" />
                  <p>Select Female Sheep</p>
                </span>
                {/* <!-- class :on --> */}
                <img src="empty" alt="" />
              </div>
            </div>

            <img
              className="comp-select-bg"
              src="/Morphing/img_item_select_bg.png"
              alt=""
            />
          </div>

          {/* <!-- class :on --> */}
          <div className="comp-select__item--name"></div>
        </div>
      </Main>

      <ButtonBox>
        {/* 비활성화 시 회색 / 활성화되면 여타버튼처럼 주황색계열 */}
        <div className="comp-btn-default">
          <button
            className={checkSheep() ? "button-active" : "button-disabled"}
          >
            Start Morphing
          </button>
        </div>
      </ButtonBox>
      <SelectSheepModal modal={modal} setModal={setModal} />
    </>
  );
}

/*
모달에서 받아야 하는 정보
  - Male/Female
  - 양의 목록

모달에서 반환해줘야 하는 정보
  - 어떤 Sheep이 들어가는지
*/
