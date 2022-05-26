import styled from "styled-components";

//! Landing
export const Pin = styled.span`
  padding: 3px 38px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff8e2;
  background: #a85c09;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 20px;
  // margin-bottom: 25px;

  @media (max-width: 580px) {
    padding: 3px 28px !important;
    font-size: 14px !important;
  }
`;

export const Title = styled.div`
  color: ${({ color }) => color};

  font-family: Arvo;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;

  text-shadow: 6px 6px 5px rgb(189 181 155 / 50%);

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
    margin-top: 50px;
  }
`;

//! Inventory
export const InventoryMain = styled.div`
  background-color: #fff8e2;
  position: relative;

  @media (max-width: 1100px) {
    top: 80px;
  }
`;

//! LuckyBox
export const LuckyBoxMain = styled.div`
  background-color: #fff8e2;
`;

export const LuckyBoxContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 1100px) {
    position: relative;
    top: 80px;
  }
`;

export const LuckyBoxContent = styled.div`
  position: relative;

  max-width: 1440px;
  min-height: 100vh;
  padding: 70px;

  @media (max-width: 1000px) {
    padding: 30px 0;
  }

  .title {
    color: #6f5246;
    text-align: center;
    padding: 75px 0 60px;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 0;
    font-weight: 900;
    letter-spacing: 1.6px;

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

//! Shop
export const ShopMain = styled.div`
  background-color: #fff8e2;
  position: relative;
`;

export const ShopContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

export const ShopContent = styled.div`
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

//! Map
export const Logo = styled.div`
  z-index: 10;
  position: fixed;
  left: 0px;
  top: 0px;
  padding: 0px;
  margin: 0px;

  @media (min-width: 758px) {
    display: block;
  }

  @media (max-width: 757px) {
    display: none;
  }
`;

export const Inventory = styled.a`
  position: fixed;
  left: 10px;
  bottom: 10px;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 758px) {
    display: inline-block;
  }

  @media (max-width: 757px) {
    display: none;
  }
`;
