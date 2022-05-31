import styled from "styled-components";
import { Title } from "../../../styles";

export const Main = styled.div`
  background-color: #75594e;

  .page-container {
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    padding: 70px 0;

    @media (max-width: 1100px) {
      padding: 70px 0;
    }

    @media (max-width: 580px) {
      padding: 50px 0;
    }

    .partners_wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;

      @media (max-width: 1300px) {
        gap: 1.53846%;
      }

      @media (max-width: 1000px) {
        width: 361px;
        margin: 0 auto;
        gap: 13px;
        grid-template-columns: repeat(2, minmax(240px, 1fr));
      }

      @media (max-width: 580px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 1fr));
        align-items: center;
      }

      .partner-img {
        width: 310px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        border-radius: 8px;

        @media (max-width: 1300px) {
          width: 23.8461538462% !important;
        }

        @media (max-width: 1000px) {
          margin-bottom: 0;
          width: 174px !important;
        }
      }
    }
  }
`;

export const PartnersTitle = styled(Title)`
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  color: #fff8e2;
  text-shadow: 6px 6px 5px #63473d;

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
    margin-top: 0;
  }

  @media (max-width: 580px) {
    font-size: 28px !important;
    line-height: 40px !important;
  }
`;
