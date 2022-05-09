import styled from "styled-components";
import { Title } from "../../../styles/index";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff8e2;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  position: relative;

  @media (max-width: 1000px) {
    min-height: unset;
  }

  .bottom_left {
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0;
    width: 23vw;
    pointer-events: none;

    @media (max-width: 580px) {
      display: none;
    }
  }

  .bottom_right {
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    width: 26vw;
    pointer-events: none;

    @media (max-width: 580px) {
      display: none;
    }
  }

  .page-container {
    display: flex;
    flex-direction: column;
    padding-top: 0;

    text-align: center;

    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    @media (max-width: 1100px) {
    }

    @media (max-width: 1000px) {
      align-items: center;
      padding: 0 50px;
    }

    .sheepster-title {
      width: 100%;
      text-shadow: 6px 6px 5px rgb(189 181 155 / 50%);
      margin-top: 100px;
      text-align: center;
      color: #3f2d1c;

      @media (max-width: 1000px) {
        margin-top: 50px;

        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.05em;
      }

      @media (max-width: 580px) {
        font-size: 28px !important;
        line-height: 40px !important;
        font-size: 32px;
      }
    }

    .sheepster_board {
      position: relative;
      z-index: 1;

      img {
        width: 770px;
        vertical-align: middle;

        @media (max-width: 1000px) {
          width: 500px;
          transform: scale(0.8);
        }

        @media (max-width: 680px) {
          width: 350px;
          margin-top: 20px;
          margin-bottom: 50px;
          transform: scale(1);
        }
      }

      .sheepster_apply {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 16.2%;

        @media (max-width: 680px) {
          bottom: 24.2%;
        }

        a {
          display: block;
          position: relative;
          width: 250px;
          height: 62px;

          @media (max-width: 1000px) {
            width: 160px;
            height: 40px;
          }

          @media (max-width: 680px) {
            width: 110px;
            height: 28px;
          }
        }
      }
    }
  }
`;

export const SheepsterTitle = styled(Title)`
  color: #3f2d1c;
  font-weight: bold;
  text-shadow: 6px 6px 5px rgb(189 181 155 / 50%);
  margin-top: 100px;
  margin-bottom: 0px;
  line-height: 66px;

  @media (max-width: 1000px) {
    margin-top: 50px;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
    margin-bottom: 0px;
  }

  @media (max-width: 580px) {
    font-size: 28px !important;
    line-height: 40px !important;
  }
`;
