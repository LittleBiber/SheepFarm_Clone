import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 980px;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;

  .welcome_image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 2600px;
    height: 980px;
    z-index: -2;

    @media (max-width: 580px) {
      display: none;
    }
  }

  .welcome_image_mobile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;

    @media (min-width: 580px) {
      display: none;
    }
  }

  .welcome_text {
    width: 1300px;
    padding: 80px 80px 98px 55px;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    // width: 610px;
    top: 75px;
    // padding: 60px 0;
    text-align: center;

    @media (max-width: 1100px) {
      padding: 40px 0px 48px;
      width: 428px;
    }

    @media (max-width: 580px) {
      width: 100vw;
    }
  }

  .title {
    color: #35220e;
    letter-spacing: 0.03em;
    position: relative;
    font-family: "Arvo";
    font-weight: bold;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #492100;
  }

  .big {
    font-size: 64px;
    line-height: 72px;

    text-transform: uppercase;
    color: #35220e;

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
    padding: 0 0 15px;

    @media (max-width: 1100px) {
      padding: 0;
      font-size: 24px;
      line-height: 44px;
    }

    @media (max-width: 580px) {
      font-size: 5.60748vw;
      line-height: 10.28037vw;
    }
  }

  .underline {
    position: relative;
    z-index: 1;

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

      @media (max-width: 1100px) {
        height: 24px;
        bottom: 4px;
      }

      @media (max-width: 580px) {
        bottom: 0.93458vw;
        height: 5.60748vw;
      }
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
    letter-spacing: -0.3px;

    font-weight: 700;

    :hover {
      background: #d06920;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
