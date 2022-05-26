import React, { useState } from "react";
import { Selector, OpenBox, ItemList } from "../components/Luckybox";
import { Header, MobileHeader, Footer } from "../components/Common";
import {
  LuckyBoxMain,
  LuckyBoxContentWrapper,
  LuckyBoxContent,
} from "../styles";

export default function Luckybox() {
  const [select, setSelect] = useState(0);

  return (
    <LuckyBoxMain>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <LuckyBoxContentWrapper>
        <LuckyBoxContent>
          <div className="title">LUCKY BOX</div>
          <Selector select={select} setSelect={setSelect} />
          {!select ? <ItemList /> : <OpenBox />}
        </LuckyBoxContent>
      </LuckyBoxContentWrapper>
      <Footer section={true} />
    </LuckyBoxMain>
  );
}
