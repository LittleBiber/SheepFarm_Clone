import React from "react";
import Canvas from "../components/Map/Canvas";
import { Logo, Inventory } from "../styles";

export default function Map() {
  return (
    <>
      <Canvas />

      <Logo>
        <a href="/">
          <img src="/Map/sheepfarm_logo_top.png" alt="logo" />
        </a>
      </Logo>

      <Inventory target="_blank" href="/inventory">
        <img src="/Map/inventory.png" alt="inventory" />
      </Inventory>
    </>
  );
}

/*
  가지고 있는 것: Sectors, Lands 전체 데이터

  가장 먼저 알아야 할 것: 무엇이 어떤 데이터를 구성하는가?
    - Sectors: [id, x col, y col] 
    - Lands: [id, x col, y col, sold여부, 토큰의 ID]

    > id값으로 섹터 안의 양 마릿수, 땅 크기 값이 도출되는데 굳이 두 가지가 모두 필요한가?
    > Lands 데이터는 sold, tokenID말고 의미가 없는건가?
    > 데이터가 커져서 SQLf로 보내도 join시킬때 굳이 좌표값까지 검색시킬 이유가 별로 없어보이는데 왜지;

    > Canvas 의 Items 함수를 Map에서 만들고 상태값으로 밑에 뿌려주면?
      이렇게 하면 데이터가 엄청 커서 함수 끝나기전에 렌더링될 수도 있나?
      일단 해보고 문제생기면 다시 수정하기

  필요한 것:
    - 현재 선택된 Sector의 Spots정보
    - 현재 선택된 Spot의 ID 또는 전체 데이터
  */
