import React, { useState } from "react";
import { Box, CardSlider } from "../../Common";
import { Pin } from "../../../styles";
import { Main } from "./styles";
import { DATA_LIST } from "./dummy";

export default function Features() {
  const [idx, setIdx] = useState(0);

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

    if (result < -50 && idx > 0) {
      setIdx(idx - 1);
    } else if (result > 50 && idx < 3) {
      setIdx(idx + 1);
    }
  };

  const options = {
    top: -90,
    active_color: "#75594E",
    color: "#EADEB9",
    count: 4,
    now: idx,
    update: setIdx,
  };

  return (
    <Main offset={idx * -455}>
      <div className="page-container">
        <div className="pin_wrapper">
          <Pin>GAME</Pin>
        </div>
        <div className="feature_title">GAME FEATURES</div>

        <div className="box_wrapper">
          <div
            className="boxes"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            {DATA_LIST.map((e, idx) => (
              <Box options={e} key={idx} offset={idx * -404} />
            ))}
          </div>
        </div>

        <CardSlider options={options} />
      </div>
      <img
        className="bg-char"
        src="/Features/buy_cash_mishell_50p.png"
        alt=""
      />
    </Main>
  );
}
