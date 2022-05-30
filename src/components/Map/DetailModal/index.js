import React from "react";
import { Main, PurchaseDetailModal } from "./styles";

export default function DetailModal({
  detailId,
  detailSize,
  detailSheepLimit,
  detailPurchaseButton,
  detailOwnerId,
  detailDesc,
  detailImg,
  detailLocked,
  modal,
  handleDetailModal,
}) {
  const outerClick = (e) => {
    if (e.target.id === "detailmodalbg") handleDetailModal();
  };

  return (
    <Main
      id="detailmodalbg"
      className="hidden"
      ref={modal}
      onClick={outerClick}
    >
      <PurchaseDetailModal>
        <div className="content-area">
          <div className="heading-area">
            <div className="pasture-detail-title">Pasture details</div>
            <div className="country-location">New Zealand / Stewart Island</div>
          </div>
          <div className="text-area">
            <div className="contents">
              <div className="properties">
                <span className="property">
                  <img src="/DetailModal/size.png" />
                  <span id="farm-detail-size" ref={detailSize}>
                    5X5
                  </span>
                </span>
                <span className="property">
                  <img src="/DetailModal/sheep.png" />
                  <span id="farm-detail-sheeps" ref={detailSheepLimit}>
                    3
                  </span>
                </span>
              </div>
              <div className="pasture-number">
                No. <span ref={detailId}></span>
                <div className="owner-info" ref={detailLocked}>
                  Owner <br />
                  <span ref={detailOwnerId} />
                </div>
              </div>
              <div className="pasture-desc">
                <p>
                  This pasture is reserved for pioneers who are among the first
                  to arrive in Meta-land.
                </p>

                <p ref={detailDesc} />

                <p>
                  This pasture includes an auto farming feature that allows
                  players to obtain their sheep's wool without having to collect
                  it.
                </p>
              </div>
              <div className="charcter-area">
                <img src="/DetailModal/kelly.png" />
              </div>
            </div>
            <div className="preview" ref={detailPurchaseButton}>
              <div className="im" ref={detailImg} />

              <button id="locked-btn" className="btn">
                LOCKED
              </button>

              <button
                id="close-btn"
                className="btn"
                onClick={handleDetailModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </PurchaseDetailModal>
    </Main>
  );
}
