import React from "react";
import styled from "styled-components";

const Main = styled.div`
  ${({ modal }) => (modal ? "" : "display: none;")}

  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000000b3;
  z-index: 9999;

  @media (min-width: 757px) {
    overflow-y: scroll;
  }
`;

const PurchaseDetailModal = styled.div`
  display: flex;

  @media (min-width: 758px) {
    width: 630px;
    height: 400px;
    left: calc(50% - 250px);
    top: calc(50% - 255px);

    align-items: flex-end;
    position: fixed;
  }

  @media (max-width: 757px) {
    position: relative;

    width: 90vw;
    height: 400px;
    left: 5vw;
    top: 5vw;
  }

  .content-area {
    background: url(/DetailModal/note_top.png) repeat-x;
    background-size: 30px;
    height: 100%;
    width: 100%;

    flex-direction: column;

    .heading-area {
      margin-top: 30px;
      background-color: #fef7e2;

      .pasture-detail-title {
        padding: 10px 25px 0 25px;
        font-weight: 700;
        color: #41322a;
        font-size: 18px;
      }

      .country-location {
        margin: 10px 25px 0 25px;
        font-size: 25px;
        border-bottom: 1px solid #ddd5be;
      }
    }

    .text-area {
      background-color: #fef7e2;
      box-sizing: border-box;
      display: flex;

      @media (min-width: 758px) {
        flex-direction: row;
      }

      @media (max-width: 757px) {
        flex-direction: column;
      }

      .contents {
        position: relative;

        .properties {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;

          .property {
            background-color: #ba8f5d;
            border-radius: 25px;
            color: white;
            display: flex;
            width: 100px;
            align-items: center;
            justify-content: space-between;
            padding: 2px 15px 2px 5px;
            margin: 10px;
            font-weight: 700;
          }
        }

        .pasture-number {
          margin: 0px 20px 0 20px;
          border-bottom: 1px solid #ddd5be;
          font-weight: 700;
          padding-bottom: 7px;

          .owner-info {
            font-size: 13px;
            font-weight: 500;
          }
        }

        .pasture-desc {
          margin: 15px 20px 0 20px;
          padding-bottom: 7px;

          p {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }
        }

        .charcter-area {
          position: absolute;
          bottom: 0;
          left: -210px;

          @media (max-width: 757px) {
            display: none;
          }
        }
      }

      .preview {
        text-align: center;

        .im {
          ${({ id }) =>
            `background: url(https://cdn.sheepfarm.io/nft/img/land_${id}.png) center center;`}

          box-sizing: border-box;
          margin: 20px;
          border: 1px solid #ddd5be;
          display: inline-block;

          @media (min-width: 758px) {
            width: 250px;
            height: 220px;
          }

          @media (max-width: 757px) {
            width: 250px;
            height: 200px;
            background-position: top 400px left -180px;
          }
        }

        .btn {
          margin-bottom: 25px;

          height: 30px;
          border: 0;
          color: white;
          border-radius: 14px;
          box-sizing: border-box;
          margin-left: 5px;
          color: white;
          cursor: pointer;
          width: 250px;
        }

        #occupied-btn,
        #locked-btn,
        #close-btn {
          background-color: #a72b22;
        }

        #purchase-btn {
          background-color: #4c9933;
        }
      }
    }
  }
`;

export default function DetailModal({
  id,
  size,
  sheepLimit,
  sold,
  open,
  ownerId,
  spotModal,
  setSpotModal,
}) {
  const OnClickOccupied = (id) => {
    window.open(
      `https://opensea.io/assets/klaytn/0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6/${id}`,
      "_blank"
    );
  };

  return (
    <Main modal={spotModal}>
      <PurchaseDetailModal id={id}>
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
                  <span id="farm-detail-size">{size}</span>
                </span>
                <span className="property">
                  <img src="/DetailModal/sheep.png" />
                  <span id="farm-detail-sheeps">{sheepLimit}</span>
                </span>
              </div>
              <div className="pasture-number">
                No. {id}
                <div className="owner-info">
                  Owner <br />
                  0xf28191e65F145dd5CffF98cfe8792501a11074cB {/* 더미 ID */}
                </div>
              </div>
              <div className="pasture-desc">
                <p>
                  This pasture is reserved for pioneers&nbsp;who are among the
                  first to arrive in Meta-land.
                </p>

                {size === "5X5" ? (
                  <p>
                    This pasture can only hold 3 sheep at a time, therefore a
                    combo effect that requires more than 4 sheep will not be
                    able to be&nbsp;triggered.
                  </p>
                ) : size === "6X6" ? (
                  <p>
                    This pasture can hold 4 sheep at a time. Which means it is
                    able to trigger a combo effect that requires 4 sheep.
                  </p>
                ) : (
                  <p>
                    This pasture can hold 5 sheep at a time. This means you can
                    trigger all kind of combo effect with this pasture.
                  </p>
                )}

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
            <div className="preview">
              <div className="im" />
              {sold ? (
                <button
                  id="occupied-btn"
                  className="btn"
                  onClick={() => OnClickOccupied(id)}
                >
                  OCCUPIED
                </button>
              ) : sold !== true && open === true ? (
                <button
                  id="purchase-btn"
                  className="btn"
                  onclick="OnClickPurchase($('#purchase-detail').data().farmId)"
                >
                  PURCHASE
                </button>
              ) : (
                <button id="locked-btn" className="btn">
                  LOCKED
                </button>
              )}

              <button
                id="close-btn"
                className="btn"
                onClick={() => setSpotModal(false)}
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
