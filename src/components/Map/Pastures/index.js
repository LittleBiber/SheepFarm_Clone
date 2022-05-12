import React, { useEffect } from "react";
import styled from "styled-components";

import PastureBox from "./PastureBox";

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

4. 시간복잡도? 아무튼 효율성에 대한 고민
  - SectorData(Sectors)에는 

5. 렌더링 시점
  - Map접속 시 모달 보여줄 때는 세부사항은 로딩 안 된 상태로 겉 박스만 존재
  - 모달을 종료했을 때 포커스가 걸리면서 4_6섹터(맞는지 모름) 의 PastureBox들을 렌더링
  - 결과적으로 여기 들어오는 items는 한번 필터링된 요소가 들어와야 함.
    무턱대고 전체 데이터 렌더링하면 페이지 접속에만 5초씩 걸림
*/

export default function Pastures({ items, lands, selected, handleSelected }) {
  function onClickGoButton(event) {
    // let data = event.target["data-farm-id"];

    let code = event.target;

    console.log(code);
  }

  useEffect(() => {
    console.log(items.length)
  }, [])

  return (
    <Main div className="spot-list-area" id="sector-inspector">
      <div className="spot-list-heading" id="pastures-list-heading">
        <span>Pastures</span>
        <span id="remain-amount">
          Remains {items.filter(e => e.sold !== 1).length} / {items.length}
        </span>
      </div>

      <div id="pastures-list">
        {items.map(one => {
          return <PastureBox id={one.id} sold={one.sold} key={one.id} />
        })}

      </div>
    </Main>
  );
}

/*



*/