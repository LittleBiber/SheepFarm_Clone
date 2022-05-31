import React from "react";
import { Pin } from "../../../styles";
import { Main } from "./styles";

export default function Overview() {
  return (
    <Main>
      <div className="page-container">
        <div className="row align-items-center mobile-flex-vertical">
          <div className="col-lg-6">
            <img className="overview-img" src="/Overview/ss3t.png" alt="bg" />
          </div>
          <div className="contents col-lg-6">
            <div className="pin_wrapper">
              <Pin>GAME</Pin>
            </div>
            <div className="row">
              <div className="col-lg-12 section-title mobile-text-center">
                <div className="font-size-big overview-shadow overview-color">
                  Overview
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 section-desc overview-color mobile-text-center">
                In Sheepfarm in meta-land, you can purchase real-world pastures,
                run your own farm, raise sheep, and make money! Collect adorable
                sheep (NFT) and compete with other players for a profit! (PvP)
                <br />
                <div className="mobile-banner">
                  <a className="icon-pasture" href="/map">
                    <img src="/Overview/icon-pasture.svg" alt="overview_bg" />
                    <span>GET YOUR PASTURE</span>
                  </a>
                  <img
                    onClick={() => alert("Coming Soon!")}
                    src="/Overview/available_web.png"
                    alt="coming_soon"
                  />
                </div>
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


> 수정 / PC-Mobile 버전을 따로 만들어 사용하기
*/
