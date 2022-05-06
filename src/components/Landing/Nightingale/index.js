import React, { useState } from "react";
import { Pin } from "../../../styles/index";
import ImageBox from "../../Common/ImageBox";
import CardSlider from "../../Common/CardSlider";
import { Main, MAR_Title } from "./styles";

export default function Nightingale() {
  const [now, setNow] = useState(0);

  const DATA_LIST = [
    {
      imgborder: "#3E2A18",
      boxborder: "#3E2A18",
      background: "#FFF8E2",
      shadow: "#573f36",
      color: "#6F5246",
      image: "/Token_Nft/vote.png",
      title: "UCC Polling",
      desc: "Sheep will be released seasonally, and users will be able to submit direct designs and nominations for sheep to be released. The vote of the NGIT holders determines which sheep are chosen from the nominations.",
    },
    {
      imgborder: "#3E2A18",
      boxborder: "#3E2A18",
      background: "#FFF8E2",
      shadow: "#573f36",
      color: "#6F5246",
      image: "/Token_Nft/storm.png",
      title: "DAO Gaming",
      desc: "User votes can influence a variety of aspects. For example, depending on the outcome of the vote, the weather could be either dry or rainy. Some sheep do well in dry weather, while others may be more productive in humid conditions.",
    },
    {
      imgborder: "#3E2A18",
      boxborder: "#3E2A18",
      background: "#FFF8E2",
      shadow: "#573f36",
      color: "#6F5246",
      image: "/Token_Nft/dao.png",
      title: "Defi Staking",
      desc: "Holders of NGIT tokens are deemed to be making a contribution to the Sheepfarm ecosystem simply by holding their tokens. If you stake NGIT, you can receive MARD tokens as a reward.",
    },
  ];
  return (
    <Main offset={-150 + now * -435}>
      <div className="page-container">
        {/* -150, -585, -1020*/}
        <div className="mar_top">
          {/* 메인 */} {/* 이미지 div */}
          <img src="/Token_Nft/ngit.png" />
          <div className="mar_text">
            {/* 핀, 제목, 설명 div */}
            <div className="pin_wrapper">
              <Pin>Token/NFT</Pin>
            </div>
            <MAR_Title color="#FFF8E2">NIGHTINGALE TOKEN</MAR_Title>
            <div className="mar_desc">
              NGIT is the governance token of meta-land. The token represents
              voting power in UCC polling and DAO gaming. NGIT has a fixed
              supply and will not be increased.
            </div>
          </div>
        </div>
        <div className="mar_bottom">
          <div className="imgbox_wrapper">
            {DATA_LIST.map((one, idx) => (
              <ImageBox {...one} key={idx} />
            ))}
          </div>
        </div>
        <CardSlider
          count={3}
          active_color="#3E2A18"
          color="#EADEB9"
          now={now}
          update={setNow}
        />
      </div>
    </Main>
  );
}

/*
일반웹
  - 이미지 / 핀 + 제목 + 내용
  - 카드 3장

모바일
  - 이미지가 맨 위로
  - 핀 제목 내용은 위에서 아래로
  - 카드는 overview처럼 버튼 넘기기 구현 필요
*/

/*
원 테두리 색 imgborder
박스 테두리 색 boxborder
배경색 background
글자 색 color
이미지 주소 img
*/

/*
핀을 핀 자체만 styled로 뺄게 아니라 wrapper div까지 합쳐서 padding을 미리 줬어야 더 효율적이었을듯
매번 불러올때마다 div따로 파서 빈공간 만들고 있으니 결국 또 작업하는건 똑같다;
*/

/*

*/
