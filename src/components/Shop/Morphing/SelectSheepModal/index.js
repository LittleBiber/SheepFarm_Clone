import React, { useState } from "react";
import { Main } from "./styles";

export default function SelectSheepModal({ modal, setModal }) {
  const [rarity, setRarity] = useState("rare");
  const handleRarity = (event) => {
    setRarity(event.target.id);
  };

  const killModal = () => {
    setRarity("rare");
    setModal(false);
  };

  return (
    <Main modal={modal}>
      <div class="select-morph-sheep">
        <div class="close-btn" onClick={killModal}></div>

        <div class="comp-select-popup">
          <div class="comp-select-popup-bx">
            <dl class="comp-select__title">
              <dt class="gender">{modal} Sheep</dt>
              <dd>Select morphing materials</dd>
            </dl>

            <div class="comp-select-category">
              <div
                class={["comp-btn-default", rarity === "rare" ? "on" : ""].join(
                  " "
                )}
              >
                {/* 선택된 버튼에는 on 클래스 부여 */}
                <button id="rare" onClick={handleRarity}>
                  Rare
                </button>
              </div>

              <div
                class={[
                  "comp-btn-default",
                  rarity === "normal" ? "on" : "",
                ].join(" ")}
              >
                <button id="normal" onClick={handleRarity}>
                  Normal
                </button>
              </div>
            </div>

            <div class="comp-select-list hidden">
              <a
                class="select-list__btn select-list__btn--left"
                href="javascript:;"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-eb60b0262adbcd2d"
                aria-disabled="false"
              >
                <img src="/Morphing/btn_left_arrow.png" alt="" />
              </a>
              <div className="swiper-bx">
                <div id="loading" class="display-none"></div>
                <div class="select-list swiper comp-select__list-swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div
                    class="select-list__bx swiper-wrapper"
                    id="swiper-wrapper-eb60b0262adbcd2d"
                    aria-live="polite"
                  >
                    <ul id="0" class="swiper-slide"></ul>
                  </div>
                  <span
                    class="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"></div>
              </div>

              <a
                class="select-list__btn select-list__btn--right"
                href="javascript:;"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-eb60b0262adbcd2d"
                aria-disabled="false"
              >
                <img src="img/shop/btn_right_arrow.png" alt="" />
              </a>
            </div>

            {/* 사용가능한 Sheep 이 없을때 보여줘야 함, className='on' 으로 구분 */}
            <div class="comp-no-item">
              <dl>
                <dt>
                  <img src="/Morphing/img_character00.png" alt="" />
                </dt>
                <dd>No available items</dd>
              </dl>
            </div>

            {/* 사용가능한 Sheep이 있을때 보여줘야 함 */}
            <div class="comp-select-total hidden">
              <div class="comp-select-total-bx">
                <dl>
                  <dt>Total</dt>
                  <dd>0</dd>
                </dl>

                <div class="comp-select-ok">
                  <div class="comp-btn-default comp-btn--red">
                    <a href="javascript:;">
                      <button>OK</button>
                    </a>
                  </div>
                </div>
              </div>

              <img src="img/shop/bg_select_popup_bottom.png" alt="" />
            </div>
          </div>
        </div>

        <div className="dimmed-bg" onclick="closePopup()" />
      </div>

      {/* 양 합칠때 나오는 부분 > 현재 볼 수 없음... */}
      {/* 사용가능한 Sheep이 있을때 보여줘야 함 */}
      <div class="popup-content select-morph-grade hidden">
        <div class="close-btn" onclick="closePopup()"></div>
        <div class="comp-select-popup">
          <div>Morphing can result in a sheep of equal or higher rarity.</div>
          <div id="do-morph-grade1">
            <div>Standard Morphing</div>
            <div class="pp">50 KLAY</div>
          </div>
          <div id="do-morph-grade2">
            <div>Advanced Morphing</div>
            <div class="pp">70 KLAY</div>
          </div>
          <div class="morph-percent">
            Probability Increased By <span>+5%</span>
          </div>
        </div>
        <div class="dimmed-bg" onclick="closePopup()"></div>
      </div>
      {/* 사용가능한 Sheep이 있을때 보여줘야 함 */}
      <div class="popup-content morphing hidden">
        <div class="comp-select-popup">
          <div>
            <div>MORPHING NOW...</div>
          </div>
        </div>
        <div class="dimmed-bg" onClick={killModal} />
      </div>
      {/* </div> */}
    </Main>
  );
}

/*
모달 켜질때 받아와야 하는 데이터
  - Male / Female
  - 이용가능한 Sheep의 데이터
    - 예상) 각 Sheep은 이름, 이미지, 레어도(원래는 Epic도 있었나본데 비활성화함)
*/
