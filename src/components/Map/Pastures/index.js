import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: white;
  z-index: 10;
  position: absolute;
  right: 0;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #e4bb88;
  border: 5px solid #504130;
  filter: drop-shadow(0px 5px 0px #000);
  bottom: 10px;

  span {
    pointer-events: none;
  }

  @media (min-width: 758px) {
    width: 350px;
    top: 100px;
  }

  @media (max-width: 757px) {
    width: calc(100% - 20px);
    top: calc(100% - 35%);
  }

  .spot-list-heading {
    background-color: #504130;
    color: white;
    padding: 0px 5px 5px 5px;
    box-sizing: border-box;
    width: calc(100% + 1px);
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    // span에는 따로 적용되는 속성 없었음
  }

  #pastures-list {
    height: calc(100% - 30px);
    overflow-y: scroll;

    .row {
      padding: 4px;
      display: flex;
      justify-content: space-between;
      background-color: #ba8f5d;
      border-radius: 10px;
      margin: 10px;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;
      }

      .sector-id {
        background-color: #ba8f5d;
        justify-content: center;

        @media (min-width: 758px) {
          width: 50px;
        }

        @media (max-width: 757px) {
          width: unset;
        }
      }

      .property {
        display: flex;
        align-items: center;
        color: white;

        @media (min-width: 758px) {
          padding: 0 5px;
        }

        img {
          @media (max-width: 757px) {
            width: 25px;
          }
        }
      }

      .sold-btn-parent {
        display: flex;
        align-items: center;

        @media (min-width: 758px) {
          width: 86px;
        }

        .sold-btn {
          width: 100%;
          text-align: center;
          background-color: #bf3f3f;
          color: white;
          cursor: pointer;
          padding: 6px;
          text-decoration: none;
          border-radius: 10px;
          font-size: 13px;
          font-family: "Arial";
        }
      }

      span .sold-btn {
        width: 100%;
        text-align: center;
        background-color: #bf3f3f;
        color: white;
        cursor: pointer;
        padding: 6px;
        text-decoration: none;
        border-radius: 10px;
        border: none;
        font-size: 13px;
        font-family: "Arial";

        @media (min-width: 758px) {
          width: 86px;
        }
      }
    }
  }
`;

/*
1. 전달받는 정보:
  - 각 포인트 id, 크기, 양의 마릿수, locked(Boolean)
  - 전체 개수 / locked 개수 
  - 현재 선택된 값의 id (스크롤 최상단으로 이동 + 배경색 바뀜)
  - 

2. 전달하는 정보:
  - 선택한 값의 id

3. 값을 찾아오는 방법
  - Lands의 데이터(박스 안으로 필터된? 아마도) 를 전달받는다.
  - sold 여부에 따라 Occupied/Locked 구분한다.
    - Occupied면 구매할 수 있는 OpenSeas 링크를 사용
    - Locked면 포인터만 클릭가능하게 보이고 onClick은 없음
  - 크기, 양의 마릿수는 Sectors에서 index로 찾기?
*/

export default function Pastures({ SectorData, selected, handleSelected }) {
  function onClickGoButton(event) {
    // let data = event.target["data-farm-id"];

    let code = event.target;

    console.log(code);
  }

  return (
    <Main div className="spot-list-area" id="sector-inspector">
      <div className="spot-list-heading" id="pastures-list-heading">
        <span>Pastures</span>
        <span id="remain-amount">
          Remains {128} / {150}
        </span>
      </div>
      <div id="pastures-list">
        <div className="row" onClick={onClickGoButton} data-farm-id={94}>
          {/* data-farm-id 는 어떻게 빼와야 하지? > id/class 또는 함수의 인자로 넘기기? */}
          <span>
            {/* style="pointer-events: none;" */}
            <span className="sector-id">{94}</span>
            <span className="property">
              <img src="/Map/size.png" />
              {"5X5"}
            </span>
            <span className="property">
              <img src="/Map/sheep.png" />3
            </span>
          </span>
          <span className="sold-btn-parent">
            <a
              className="sold-btn"
              target="_blank" /*onClick={OnClickOccupied}*/
            >
              OCCUPIED
            </a>
          </span>
        </div>

        <div className="row" onClick={onClickGoButton} data-farm-id="6131">
          <span>
            {/* style="pointer-events: none;" */}
            <span className="sector-id">6131</span>
            <span className="property">
              <img src="/Map/size.png" />
              6X6
            </span>
            <span className="property">
              <img src="/Map/sheep.png" />4
            </span>
          </span>
          <span>
            <button disabled="" className="sold-btn">
              LOCKED
            </button>
          </span>
        </div>

        <div className="row" onClick={onClickGoButton} data-farm-id="9207">
          <span>
            {/* style="pointer-events: none;" */}
            <span className="sector-id">9207</span>
            <span className="property">
              <img src="/Map/size.png" />
              7X7
            </span>
            <span className="property">
              <img src="/Map/sheep.png" />5
            </span>
          </span>
          <span>
            <button disabled="" className="sold-btn">
              LOCKED
            </button>
          </span>
        </div>
      </div>
    </Main>
  );
}
