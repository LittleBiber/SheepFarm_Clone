import React from "react";
import { Main, PartnersTitle } from "./styles";

export default function Partners() {
  const ImageLink = [
    "https://sheepfarm.io/img/partners/img_partners_logo00.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo01.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo02.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo03.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo04.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo05.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo06.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo07.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo08.png?v=4",
    "https://sheepfarm.io/img/partners/img_partners_logo09.png?v=4",
  ];

  return (
    <Main>
      <div className="page-container">
        <PartnersTitle color="#FFF8E2">PARTNERS</PartnersTitle>
        <div className="partners_wrapper">
          {ImageLink.map((one, idx) => (
            <img className="partner-img" src={one} alt="image" key={idx} />
          ))}
        </div>
      </div>
    </Main>
  );
}

// 왜 손을 댈수록 레이아웃이 박살이 나지
