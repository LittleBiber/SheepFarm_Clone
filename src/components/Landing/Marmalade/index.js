import React, { useState } from "react";
import { Pin } from "../../../styles";
import { CardSlider, ImageBox } from "../../Common";
import { Main, TokenTitle } from "./styles";
import { DATA_LIST } from "./dummy";

export default function Marmalade() {
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
    top: -10,
    count: 3,
    active_color: "#75594E",
    color: "#EADEB9",
    now: now,
    update: setNow,
  };

  return (
    <Main offset={-150 + now * -440}>
      <div className="page-container">
        <div className="mar_top">
          <img src="/Token_Nft/logo-mard.png" alt="TOKEN_NFT" />
          <div className="mar_text">
            <div className="pin_wrapper">
              <Pin>TOKEN/NFT</Pin>
            </div>
            <TokenTitle color="#75594E">MARMALADE TOKEN</TokenTitle>
            <div className="mar_desc">
              Marmalade (MARD) token is the in-game utility token used and
              serves as the main economic unit in Sheepfarm in meta-land. The
              MARD supply can be regulated by in-game features that burn tokens
              continuously, promoting the ecosystem's overall growth.
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
