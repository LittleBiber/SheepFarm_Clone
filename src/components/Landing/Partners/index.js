import React from "react";
import { Main, PartnersTitle } from "./styles";
import { IMAGE_LINK } from "./dummy";

export default function Partners() {
  return (
    <Main>
      <div className="page-container">
        <PartnersTitle color="#FFF8E2">PARTNERS</PartnersTitle>
        <div className="partners_wrapper">
          {IMAGE_LINK.map((one, idx) => (
            <img className="partner-img" src={one} alt="partner" key={idx} />
          ))}
        </div>
      </div>
    </Main>
  );
}

// 왜 손을 댈수록 레이아웃이 박살이 나지
