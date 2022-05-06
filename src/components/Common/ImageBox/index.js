import React from "react";
import { Main } from "./styles";

export default function ImageBox({
  imgborder = "#6f5246",
  boxborder = "#ecc66a",
  background = "#ffec9e",
  shadow = "#e8dcb5",
  color = "#6f5246",
  image = "/Token_Nft/harvest.png",
  title = "Title",
  desc = "Description",
}) {
  return (
    <Main
      imgborder={imgborder}
      boxborder={boxborder}
      background={background}
      shadow={shadow}
      color={color}
      image={image}
    >
      <img src={image} alt="image" />
      <div className="ibox_desc">
        <div>
          <strong>{title}</strong>
        </div>
        <div className="token-desc">{desc}</div>
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
