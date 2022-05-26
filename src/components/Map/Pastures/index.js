import React from "react";
import { Main } from "./styles";

export default function Pastures({ pastureCount, pastureList }) {
  return (
    <Main div className="spot-list-area" id="sector-inspector">
      <div className="spot-list-heading" id="pastures-list-heading">
        <span>Pastures</span>
        <span id="remain-amount" ref={pastureCount}></span>
      </div>
      <div id="pastures-list" ref={pastureList}></div>
    </Main>
  );
}

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
