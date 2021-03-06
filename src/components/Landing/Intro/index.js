import React from "react";
import { Main } from "./styles";

export default function Intro() {
  const redirectToMap = () => {
    window.location.href = "/map";
  };

  return (
    <Main>
      <img
        className="welcome_image"
        src="/Landing/bg_section_top.jpg"
        alt="bg_section_top.jpg"
      />
      <img
        className="welcome_image_mobile"
        src="/Landing/bg_section_top_m.jpg"
        alt=""
      />
      <div className="welcome_text">
        <span className="title small">INTRODUCING A METAVERSE</span>
        <span className="title big underline">SHEEP FARMING</span>
        <span className="title big">SIMULATOR!</span>
        <button className="play-game" onClick={redirectToMap}>
          PLAY GAME
        </button>
      </div>
    </Main>
  );
}
