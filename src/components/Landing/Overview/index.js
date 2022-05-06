import React from "react";
import { Pin } from "../../../styles";
import { Main } from "./styles";

export default function Overview() {
  return (
    <Main>
      <div className="container">
        <div className="image-container">
          <img src="Overview/ss3t.png" alt="ss3t" />
        </div>
        <div className="left">
          <div>
            <Pin>GAME</Pin>
          </div>
          <div>
            <div className="title shadow">OVERVIEW</div>
            <div className="description">
              In Sheepfarm in meta-land, you can purchase real-world pastures,
              run your own farm, raise sheep, and make money! Collect adorable
              sheep (NFT) and compete with other players for a profit! (PvP)
              <div className="banner_small">
                <a className="banner" href="https://sheepfarm.io/map">
                  <img src="/Overview/icon-pasture.svg" alt="pasture" />
                  <span>GET YOU PASTURE</span>
                </a>
                <img
                  className="avail_web"
                  src="/Overview/available_web.png"
                  alt="web"
                  onClick={() => alert("Comming Soon!")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

/*
일반웹
  - 제목
  - 설명
  - 버튼 2개
  - 배경 이미지(상하로 움직임)
  
  - 가로 배치

모바일
  - 요소들이 세로 배치로 변경
  - 이미지 움직임 없음 + z-index 뒤로 빠짐
*/
