import React, { useState } from "react";
import styled from "styled-components";
import Selector from "../components/Luckybox/Selector";
import ItemList from "../components/Luckybox/ItemList";
import OpenBox from "../components/Luckybox/OpenBox";
import Header from "../components/Common/Header";
import MobileHeader from "../components/Common/MobileHeader";
import Footer from "../components/Common/Footer";

const Wrapper = styled.div`
  font-family: "Poppins";
  background-color: #fff8e2;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

const Main = styled.div`
  position: relative;

  max-width: 1440px;
  min-height: 100vh;
  padding: 70px;

  @media (max-width: 1000px) {
    padding: 30px 0;
    top: 60px;
  }

  .title {
    color: #6f5246;
    text-align: center;
    padding: 75px 0 60px;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 0;
    font-weight: 900;
    line-height: 75px;
    letter-spacing: 1px;

    @media (max-width: 1100px) {
      padding-top: 0;
    }

    @media (max-width: 1000px) {
      padding-top: 10px;
      padding-bottom: 40px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export default function Luckybox() {
  const [select, setSelect] = useState(0);

  return (
    <Wrapper>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <ContentWrapper>
        <Main>
          <div className="title">LUCKY BOX</div>
          <Selector select={select} setSelect={setSelect} />
          {!select ? <ItemList /> : <OpenBox />}
        </Main>
      </ContentWrapper>
      <Footer section={true} />
    </Wrapper>
  );
}
