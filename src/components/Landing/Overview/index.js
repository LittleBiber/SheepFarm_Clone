import React from "react";
import { Pin } from "../../../styles";
import { Main } from "./styles";

export default function Overview() {
  return (
    <Main>
      <div class="page-container">
        <div class="row align-items-center mobile-flex-vertical">
          <div class="col-lg-6">
            <img class="overview-img" src="/Overview/ss3t.png" />
          </div>
          <div class="contents col-lg-6">
            <div className="pin_wrapper">
              <Pin>GAME</Pin>
            </div>
            <div class="row">
              <div class="col-lg-12 section-title mobile-text-center">
                <div class="font-size-big overview-shadow overview-color">
                  Overview
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 section-desc overview-color mobile-text-center">
                In Sheepfarm in meta-land, you can purchase real-world pastures,
                run your own farm, raise sheep, and make money! Collect adorable
                sheep (NFT) and compete with other players for a profit! (PvP)
                <br />
                <div class="mobile-banner">
                  <a class="icon-pasture" href="http://sheepfarm.io/map">
                    <img src="/Overview/icon-pasture.svg" />
                    <span>GET YOUR PASTURE</span>
                  </a>
                  <img
                    onclick="alert('coming soon!')"
                    src="/Overview/available_web.png"
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

/*
<div className="container">
        <div className="content-wrapper">
          <div className="image-container">
            <img src="Overview/ss3t.png" alt="ss3t" />
          </div>
          <div className="left">
            <div className="pin_wrapper">
              <Pin>GAME</Pin>
            </div>
            <div className="row">
              <div className="title shadow">OVERVIEW</div>
            </div>
            <div className="row">
              <div className="description">
                In Sheepfarm in meta-land, you can purchase real-world pastures,
                run your own farm, raise sheep, and make money! Collect adorable
                sheep (NFT) and compete with other players for a profit! (PvP)
                <span className="banner_small">
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
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
