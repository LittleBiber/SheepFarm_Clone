import React from "react";
import { Pin } from "../../../styles";
import { Main, TrailerTitle } from "./styles";

export default function Overview() {
  return (
    <Main>
      <div className="page-container">
        <div className="top">
          <div className="pin_wrapper">
            <Pin>GAME</Pin>
          </div>
          <TrailerTitle>GAME TRAILER</TrailerTitle>
        </div>
        <div className="video_wrapper">
          <video poster="/Trailer/placeholder2.png" controls>
            <source
              src="https://sheepfarm.io/img/SheepFarm_2021_V02.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="bg_pattern" />
      <img className="bottom_img" src="Trailer/plant-bg-trailer.png" />
    </Main>
  );
}

// Title 부분도 Style뺄 수 있을 것 같은데? 색상, 그림자만 변수로 받으면?
// https://sheepfarm.io/img/SheepFarm_2021_V02.mp4 비디오 주소는 링크로 넣기
// 비디오에 poster...? 이게 뭐지? 배경이미지인가? 근데 링크를 못따겠는데;
