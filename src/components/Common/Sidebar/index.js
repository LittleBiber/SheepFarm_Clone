import React from "react";
import { Main } from "./styles";

export default function Footer() {
  const copyLink = () => {
    const link = "https://sheepfarm.io";
    navigator.clipboard.writeText(link);
    alert("copied!");
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Main>
      <a href="https://twitter.com/SheepFarmMeta" target="_blank">
        <img src="/Sidebar/discord.svg" />
      </a>
      <a href="https://twitter.com/SheepFarmMeta" target="_blank">
        <img src="/Sidebar/twitter.svg" />
      </a>
      <a href="https://t.me/sheepmeta" target="_blank">
        <img src="/Sidebar/telegram.svg" />
      </a>
      <a href="https://sheepfarm.medium.com/" target="_blank">
        <img src="/Sidebar/medium.png" />
      </a>
      <div className="share" onClick={copyLink}>
        <img src="/Sidebar/link.png" />
      </div>
      <div onClick={scrollTop}>
        <img className="top-btn" src="/Sidebar/go-top.svg" />
      </div>
    </Main>
  );
}

// 왜 SNS버튼이랑 #top은 분리되어있는걸까
