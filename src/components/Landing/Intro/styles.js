import styled from "styled-components";

export const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap");

  width: 100%;
  height: 980px;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;

  .welcome_image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 2600px;
    height: 980px;
    z-index: -2;
  }

  .welcome_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 610px;
    top: 75px;
    padding: 60px 0;
    text-align: center;

    @media (max-width: 1100px) {
      padding: 40px 0px 48px;
      width: 428px;
      // padding-left: 0;
      // padding-right: 0;
    }

    @media (max-width: 580px) {
      width: 100vw;
    }
  }

  .title {
    font-family: "Arvo";
    color: #35220e;
    letter-spacing: 0.03em;
    position: relative;
  }

  .big {
    font-size: 64px;
    line-height: 72px;

    @media (max-width: 1100px) {
      font-size: 40px;
      line-height: 44px;
    }

    @media (max-width: 580px) {
      line-height: 10.28037vw;
      font-size: 9.34579vw;
    }
  }

  .small {
    font-size: 32px;
    padding: 0 0 10px;

    @media (max-width: 1100px) {
      font-size: 24px;
    }

    @media (max-width: 580px) {
      font-size: 5.60748vw;
      line-height: 10.28037vw;
    }
  }

  .underline {
    position: relative;

    ::after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 30px;
      background-color: #ffe380;
      z-index: -1;
    }
  }

  .play-game {
    font-size: 24px;
    width: 240px;
    height: 60px;
    border-radius: 100px;
    border: none;
    line-height: 36px;
    padding: 0;
    margin-top: 24px;
    background: #ff7f22;
    color: white;
    font-family: "Poppins";
    font-weight: bold;

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
