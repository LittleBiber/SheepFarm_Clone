import React, { useState } from "react";
import { Pin } from "../../../styles/index";
import ImageBox from "../../Common/ImageBox";
import CardSlider from "../../Common/CardSlider";
import { Main, MAR_Title } from "./styles";
import { DATA_LIST } from "./dummy";

export default function NFTMarket() {
  const [now, setNow] = useState(0);

  return (
    <Main offset={-150 + now * -435}>
      <div className="page-container">
        <div className="mar_top">
          <img src="/Token_Nft/logo-nft.png" />
          <div className="mar_text">
            <div className="pin_wrapper">
              <Pin>TOKEN/NFT</Pin>
            </div>
            <MAR_Title color="#FFF8E2">NFT MARKET</MAR_Title>
            <div className="mar_desc">
              You can easily trade game items with other users either within our
              local NFT marketplace or 3rd party marketplaces such as OpenSea,
              Rarible, SuperRare, etc.
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
          count={3}
          active_color="#77AACF"
          color="#FFF8E2"
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

/*

*/
