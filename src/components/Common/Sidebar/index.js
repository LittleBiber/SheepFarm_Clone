import React from "react";
import { Main } from "./styles";

export default function Sidebar() {
  const copyLink = () => {
    const link = "https://sheepfarm.io";
    navigator.clipboard.writeText(link);
    alert("copied!");
  };

  const scrollTop = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  return (
    <Main>
      <a
        href="https://twitter.com/SheepFarmMeta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Sidebar/discord.svg" alt="sidebar_discord" />
      </a>
      <a
        href="https://twitter.com/SheepFarmMeta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Sidebar/twitter.svg" alt="sidebar_twitter" />
      </a>
      <a
        href="https://t.me/sheepmeta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Sidebar/telegram.svg" alt="sidebar_telegram" />
      </a>
      <a
        href="https://sheepfarm.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Sidebar/medium.png" alt="sidebar_medium" />
      </a>
      <div className="share" onClick={copyLink}>
        <img src="/Sidebar/link.png" alt="sidebar_share" />
      </div>
      <div onClick={scrollTop}>
        <img
          className="top-btn"
          src="/Sidebar/go-top.svg"
          alt="sidebar_scrollTop"
        />
      </div>
    </Main>
  );
}
