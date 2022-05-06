import React from "react";
import { Main } from "./styles";

export default function CardSlider({
  top,
  active_color,
  color,
  count,
  now,
  update,
}) {
  const handleButton = (value) => {
    if (now === 0 && value === -1) return;

    if (now === count - 1 && value === 1) return;
    else return update(now + value);
  };

  return (
    <Main color={color} active_color={active_color} top={top}>
      <div
        className={["left-side", now !== 0 && "side-active"].join(" ")}
        onClick={() => handleButton(-1)}
      ></div>

      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <div
            onClick={() => update(idx)}
            className={[
              "selection",
              idx === now ? "selection-active" : "",
            ].join(" ")}
            key={idx}
          />
        ))}

      <div
        className={["right-side", now !== count - 1 && "side-active"].join(" ")}
        onClick={() => handleButton(1)}
      ></div>
    </Main>
  );
}

/*
필요한 데이터
  - active 시 색상코드
  - not active 시 색상코드
  - 카드 개수
  - 현재 위치
  - idx값 업데이트 함수
*/
