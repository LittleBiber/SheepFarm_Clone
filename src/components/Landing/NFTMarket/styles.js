import styled from "styled-components";
import { Title } from "../../../styles/index";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b1d1e7;

  background-image: url(/Token_Nft/nft-bg.png);
  background-size: cover;

  .page-container {
    padding: 70px 0px;
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    .mar_top {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 34px;

      @media (max-width: 1000px) {
        flex-direction: column;
      }

      img {
        width: 150px;
        margin-right: 50px;

        @media (max-width: 1000px) {
          margin: 0 0 30px;
        }
      }

      .mar_text {
        display: flex;
        flex-direction: column;

        .mar_desc {
          max-width: 800px;
          color: #fff8e2;
          font-size: 20px;
          font-weight: 500;

          @media (max-width: 580px) {
            font-size: 14px !important;
          }
        }

        @media (max-width: 1000px) {
          text-align: center;
          align-items: center;
          padding: 0 20px;

          .mar_desc {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.05em;
          }
        }
      }
    }

    .mar_bottom {
      position: relative;
      transform: scale(0.8) translateY(-10%);

      @media (max-width: 1000px) {
        margin: 0 auto;
      }

      .imgbox_wrapper {
        transform: translateX(0px);

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        transition: all 0.5s;

        @media (max-width: 1000px) {
          transform: translateX(${({ offset }) => offset}px);
          justify-content: flex-start;
          gap: 140px !important;
        }
      }
    }
  }
`;

export const MAR_Title = styled(Title)`
  text-shadow: 6px 6px 5px #8bb7d6;

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 580px) {
    font-size: 28px !important;
    line-height: 40px !important;
  }
`;
