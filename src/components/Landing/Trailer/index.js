import React, { useState, useEffect } from "react";
import { Pin } from "../../../styles";
import { Main, TrailerTitle } from "./styles";

export default function Overview() {
  const [userAgent, setUserAgent] = useState("pc");

  const chkUserAgent = () => {
    const UserAgent = window.navigator.userAgent;
    if (
      UserAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      setUserAgent("mobile");
    }
  };

  useEffect(() => {
    chkUserAgent();
  }, []);

  return (
    <Main>
      <div className="page-container">
        <div className="top">
          <div className="pin_wrapper">
            <Pin>GAME</Pin>
          </div>
          {userAgent === "pc" ? (
            <TrailerTitle>GAME TRAILER</TrailerTitle>
          ) : (
            <TrailerTitle>
              GAMEPLAY
              <br />
              TRAILER
            </TrailerTitle>
          )}
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
      <img className="bottom_img" src="Trailer/plant-bg-trailer.png" alt="" />
    </Main>
  );
}
