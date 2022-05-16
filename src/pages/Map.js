import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Canvas from "../components/Map/Canvas";
import Pastures from "../components/Map/Pastures";
import Search from "../components/Map/Search";

import { Lands } from "../components/Map/Canvas/Lands";
import { Sectors } from "../components/Map/Canvas/Sectors";

export default function Map() {
  const [sectors, setSectors] = useState(Sectors);

  const [selectedSectors, setSelectedSectors] = useState([]);
  const handleSelectedSectors = (data) => {
    setSelectedSectors(data);
  };

  const [selectedSpot, setSelectedSpot] = useState(null);
  const handleSelectedSpots = (event) => {
    setPinId(Number(event.target.id));
  };

  const [pinId, setPinId] = useState(0);

  const items = sectors.map((e) => {
    // sector_0_data 의 각 값에 대해 처리하는것
    // Lands.fi >> Lands 데이터는 파일처리가 너무오래걸려서 삭제했었는데 다시 확인해봐야 함
    //! Lands도 외부파일로 불러옴

    return {
      id: e[0],
      x: e[1],
      y: e[2],
      sold: Lands[e[0] - 1].sold,
      size:
        e[0] <= 1111 + 5000 //! id값으로 사이즈 구분
          ? "5X5"
          : e[0] <= 1111 + 5000 + 3000
          ? "6X6"
          : "7X7",
      sheepLimit: e[0] <= 1111 + 5000 ? 3 : e[0] <= 1111 + 5000 + 3000 ? 4 : 5, //! 양 마릿수도 id로 구분
      tokenId: Lands[e[0] - 1].tokenId,
      // lands.find((v) => v.id == e[0]).tokenId,
      // lands와 sectors 데이터 배열 길이는 같을텐데 index로 바꾸면 로딩이 빨라지긴 할듯 + 불필요한 연산 감소?
      // (Canvas와 Pastures 두번 안하고 상위컴포넌트에서 처리)
    };
  });

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <>
      <Canvas
        items={items}
        selectedSectors={selectedSectors}
        setSelectedSectors={setSelectedSectors}
        handleSelectedSpots={handleSelectedSpots}
        pinId={pinId}
        setPinId={setPinId}
      />
      <Pastures
        selectedSectors={selectedSectors}
        handleSelectedSectors={handleSelectedSectors}
        selectedSpot={selectedSpot}
        handleSelectedSpots={handleSelectedSpots}
        pinId={pinId}
        setPinId={setPinId}
      />
      <Search />
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
