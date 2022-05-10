import React, { useState } from "react";
import styled from "styled-components";
import Selector from "../components/Shop/Selector";
import Treats from "../components/Shop/Treats";
import Morphing from "../components/Shop/Morphing";
import Upgrades from "../components/Shop/Upgrades";
import Header from "../components/Common/Header";
import MobileHeader from "../components/Common/MobileHeader";
import Footer from "../components/Common/Footer";

const Main = styled.div`
  background-color: #fff8e2;
  position: relative;

  // @media (max-width: 1000px) {
  //   top: 80px;
  // }
`;

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

const ContentWrapper = styled.div`
  // margin: 0 auto;
  // max-width: 1440px;

  min-height: 100vh;
  background-color: #fff8e2;
  padding: 75px 65px 197px 70px;

  @media (max-width: 1440px) {
    padding-right: 4.51389vw;
    padding-left: 4.86111vw;
  }

  @media (max-width: 1100px) {
    position: relative;
    top: 80px;
    padding-top: 0;
  }

  @media (max-width: 720px) {
    padding: 0px 0px 20px 0px;
  }

  .shop-contents {
    @media (max-width: 720px) {
      padding: 0 7.71028vw;
    }
  }

  .content-box {
    @media (max-width: 1000px) {
      padding: 0;
    }

    .title {
      color: #6f5246;
      text-align: center;
      padding: 55px 0 50px;
      font-size: 36px;
      line-height: 54px;
      margin: 0;

      font-weight: 900;
      letter-spacing: 0.05em;

      @media (max-width: 1100px) {
        padding-top: 40px;
        padding-bottom: 40px;
      }

      @media (max-width: 720px) {
        font-size: 24px;
        text-align: center;
        line-height: initial;
        margin-bottom: 0;
        padding: 40px 0 0;
      }
    }
  }
`;

export default function Shop() {
  const [select, setSelect] = useState(0);
  const components = [<Treats />, <Morphing />, <Upgrades />];

  return (
    <Main>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <PageContainer>
        <ContentWrapper>
          <div className="content-box">
            <h1 className="title">SHOP</h1>
            <Selector select={select} setSelect={setSelect} />
            <div className="shop-contents">{components[select]}</div>
          </div>
        </ContentWrapper>
      </PageContainer>
      <Footer section={false} />
    </Main>
  );
}
