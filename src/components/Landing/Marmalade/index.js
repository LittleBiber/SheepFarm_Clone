import React, { useState } from "react";

import { Pin } from "../../../styles/index";
import ImageBox from "../../Common/ImageBox";
import CardSlider from "../../Common/CardSlider";

import { Main, MAR_Title } from "./styles";

export default function Marmalade() {
  const [now, setNow] = useState(0);

  const DATA_LIST = [
    {
      imgborder: "#6f5246",
      boxborder: "#ecc66a",
      background: "#ffec9e",
      shadow: "#e8dcb5",
      color: "#6f5246",
      image: "/Token_Nft/harvest.png",
      title: "Sell Wool",
      desc: "Raise sheep and shear their wool! Rare sheep breeds are known for producing high-valuable wool. The wool you sheared can be delivered to the village chief who will then reward you with MARD.",
    },
    {
      imgborder: "#6f5246",
      boxborder: "#ecc66a",
      background: "#ffec9e",
      shadow: "#e8dcb5",
      color: "#6f5246",
      image: "/Token_Nft/sell_sheep.png",
      title: "Rent out sheep",
      desc: "Instead of managing their NFTs personally, pasture or sheep owners can make a profit by renting them out. Users who are more interested in NFT investment rather than management may find this feature handy.",
    },
    {
      imgborder: "#6f5246",
      boxborder: "#ecc66a",
      background: "#ffec9e",
      shadow: "#e8dcb5",
      color: "#6f5246",
      image: "/Token_Nft/pvp_win.png",
      title: "Compete with others",
      desc: "Take part in a friendly competition with other users. Because it is difficult to outperform other players, the prize will be substantial. Outstanding players can easily obtain MARD by participating in PvP content.",
    },
  ];
  return (
    <Main offset={-150 + now * -435}>
      <div className="page-container">
        <div className="mar_top">
          <img src="/Token_Nft/logo-mard.png" />
          <div className="mar_text">
            <div className="pin_wrapper">
              <Pin>TOKEN/NFT</Pin>
            </div>
            <MAR_Title color="#75594E">MARMALADE TOKEN</MAR_Title>
            <div className="mar_desc">
              Marmalade (MARD) token is the in-game utility token used and
              serves as the main economic unit in Sheepfarm in meta-land. The
              MARD supply can be regulated by in-game features that burn tokens
              continuously, promoting the ecosystem's overall growth.
            </div>
          </div>
        </div>
        <div className="mar_bottom">
          <div className="imgbox_wrapper">
            {DATA_LIST.map((one, idx) => (
              <ImageBox {...one} key={idx} />
            ))}
          </div>
        </div>
        <CardSlider
          top={-10}
          count={3}
          active_color="#3E2A18"
          color="#c7bd9d"
          now={now}
          update={setNow}
        />
      </div>
    </Main>
  );
}

/*
일반웹
  - 이미지 / 핀 + 제목 + 내용
  - 카드 3장

모바일
  - 이미지가 맨 위로
  - 핀 제목 내용은 위에서 아래로
  - 카드는 overview처럼 버튼 넘기기 구현 필요
*/

/*
원 테두리 색 imgborder
박스 테두리 색 boxborder
배경색 background
글자 색 color
이미지 주소 img
*/

/*
핀을 핀 자체만 styled로 뺄게 아니라 wrapper div까지 합쳐서 padding을 미리 줬어야 더 효율적이었을듯
매번 불러올때마다 div따로 파서 빈공간 만들고 있으니 결국 또 작업하는건 똑같다;
*/
