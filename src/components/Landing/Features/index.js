import React, { useState } from "react";
import Box from "../../Common/Box";
import { Pin } from "../../../styles";
import CardSlider from "../../Common/CardSlider";
import { Main } from "./styles";

const DATA_LIST = [
  {
    title: "Metaverse Pastures",
    desc: "Players start off by owning virtual pastures based on real-world environments. A single pasture can only accommodate a certain number of sheep. To extend their farms, players should buy or rent land from other players.",
    img: "/Features/land.png",
    bgcolor: "#AFE4AC",
    color: "#519864",
    border: "#76BD89",
  },
  {
    title: "Virtual Farming",
    desc: "To maximize their farm's earnings, players will require a variety of tools and installations. The items can be upgraded further during gameplay. The better the facilities on their farm, the more content their sheep will be.",
    img: "/Features/farm_build.png",
    bgcolor: "#FFE98D",
    color: "#BB9A4C",
    border: "#ECC66A",
  },
  {
    title: "Collecting NFTs",
    desc: "Through morphing, players can unlock over a hundred different types of sheep. Rare breeds produce more valuable wool, which can be traded at a higher price. Simply owning highly sought-after sheep would be of great value to NFT collectors.",
    img: "/Features/breed.png",
    bgcolor: "#FFB5C4",
    color: "#C56277",
    border: "#DE8A9C",
  },
  {
    title: "PvP Content",
    desc: "Players can compete against each other by entering tournaments. Rarer sheep will have a better chance of taking home the prize. Some players might prefer to bet on the sheep of other players rather than entering the contest themselves.",
    img: "/Features/competition.png",
    bgcolor: "#B093AC",
    color: "#624D7E",
    border: "#7D679C",
  },
];

export default function Features() {
  const [idx, setIdx] = useState(0);

  return (
    <Main offset={idx * -404}>
      <Pin>GAME</Pin>
      <div className="feature_title">GAME FEATURES</div>
      <img
        className="side_image"
        src="/Features/buy_cash_mishell_50p.png"
        alt=""
      />
      <div className="box_wrapper">
        <div className="boxes">
          {DATA_LIST.map((e, idx) => (
            <Box {...e} key={idx} />
          ))}
        </div>
      </div>

      <CardSlider
        active_color="#75594E"
        color="#EADEB9"
        count={4}
        now={idx}
        update={setIdx}
      />
    </Main>
  );
}

/*
일반웹
  - 제목
  - 설명
  - 카드 4개

모바일
  - 카드가 오른쪽으로 넓게 퍼짐
  - 아래쪽 버튼으로 이동
*/

/*
background border = color
*/

// 필요한 것 : 클릭하는 버튼 값에 따라서 카드 메뉴가 이동해야 함

// 레퍼런스의 해결방법 : onClick함수 인자로 인덱스를 전달 > offset값에 곱해 사용

// 나에게 필요한 것:
// 	1. 동적으로 변하는 offset을 저장할 useState
// 	2. onClick을 처리해 줄 함수

// --------------------------------------------------------------
// 필요한 것 : 클릭하면 색상이 변경되는 div
