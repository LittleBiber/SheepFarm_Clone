import React, { useState } from "react";
import { Pin } from "../../../styles";
import { ImageBox, CardSlider } from "../../Common";
import { Main, TokenTitle } from "./styles";
import { DATA_LIST } from "./dummy";

export default function Nightingale() {
  const [now, setNow] = useState(0);

  const [startOffset, setStartOffest] = useState(null);
  const handleDragStart = (event) => {
    if (event.type === "touchstart") {
      setStartOffest(event.changedTouches[0].screenX);
    } else {
      setStartOffest(event.pageX);
    }
  };

  const handleDragEnd = (event) => {
    let endOffset;
    if (event.type === "touchend") {
      endOffset = event.changedTouches[0].screenX;
    } else {
      endOffset = event.pageX;
    }

    const result = startOffset - endOffset;

    if (result < -50 && now > 0) {
      setNow(now - 1);
    } else if (result > 50 && now < 2) {
      setNow(now + 1);
    }
  };

  const options = {
    top: -30,
    count: 3,
    active_color: "#3E2A18",
    color: "#EADEB9",
    now,
    update: setNow,
  };

  return (
    <Main offset={-150 + now * -440}>
      <div className="page-container">
        <div className="mar_top">
          <img src="/Token_Nft/ngit.png" alt="logo" />
          <div className="mar_text">
            <div className="pin_wrapper">
              <Pin>TOKEN/NFT</Pin>
            </div>
            <TokenTitle color="#FFF8E2">NIGHTINGALE TOKEN</TokenTitle>
            <div className="mar_desc">
              NGIT is the governance token of meta-land. The token represents
              voting power in UCC polling and DAO gaming. NGIT has a fixed
              supply and will not be increased.
            </div>
          </div>
        </div>
        <div className="mar_bottom">
          <div
            className="imgbox_wrapper"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            {DATA_LIST.map((one, idx) => (
              <ImageBox options={one} key={idx} />
            ))}
          </div>
        </div>
        <CardSlider options={options} />
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
