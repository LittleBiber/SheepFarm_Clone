import React, { useState, useRef } from "react";
import Box from "../../Common/Box";
import { Pin } from "../../../styles";
import CardSlider from "../../Common/CardSlider";
import { Main } from "./styles";
import { DATA_LIST } from "./dummy";

export default function Features() {
  const [idx, setIdx] = useState(0);

  const scrollRef = useRef(null); // Drag대상 지정
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    // setStartX(e.pageX + scrollRef.current.scrollLeft)
    console.log(e.pageX);
  };

  const onDrageEnd = (e) => {
    setIsDrag(false);
    console.log(e.pageX);
  };

  const onDragMove = (e) => {
    // if(isDrag) {
    //   scrollLeft.current.scrollLeft =
    // }
    console.log(e.pageX);
  };

  const handleDrag = () => {};

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
            ref={scrollRef}
            onMouseDown={() => console.log("drag start")}
            onMouseUp={() => console.log("drag")}
            draggable
          >
            {DATA_LIST.map((e, idx) => (
              <Box {...e} key={idx} offset={idx * -404} />
            ))}
          </div>
        </div>

        <CardSlider
          top={-90}
          active_color="#75594E"
          color="#EADEB9"
          count={4}
          now={idx}
          update={setIdx}
        />
      </div>
      <img
        className="bg-char"
        src="/Features/buy_cash_mishell_50p.png"
        alt=""
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
