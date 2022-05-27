import styled from "styled-components";
import { Title } from "../../../styles/index";

export const Main = styled.div`
  min-height: 100vh;
  background-color: #fae8c4;
  position: relative;

  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    min-height: unset;
  }

  .page-container {
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    @media (max-width: 1100px) {
      padding: 0 50px;
    }

    @media (max-width: 1000px) {
      padding-top: 0;
    }

    .newsletter-desc {
      position: relative;
      left: 50%;
      display: inline-flex;
      flex-direction: column;

      @media (max-width: 1200px) {
        left: unset;
        z-index: 1;
        margin-top: 70px;
        margin-bottom: 500px;
        text-align: center;
      }

      @media (max-width: 1000px) {
        margin-top: 70px;
        margin-bottom: 300px;
      }

      .pin_wrapper {
        margin-bottom: 25px;
        letter-spacing: 0.05em;
      }

      .email_form {
        margin-bottom: 55px;
        display: flex;
        flex: 1;

        @media (max-width: 1200px) {
          margin-bottom: 20px;
          transform: scale(0.8);
        }

        @media (max-width: 720px) {
          width: auto;
        }

        input {
          outline: none;
          margin: 0;
          width: 100%;
          padding: 18px 10px 19px 30px;
          min-width: 300px;
          border: 2px solid #3f2d1c;
          color: #87725d;
          border-radius: 25px 0px 0px 25px;
          background-color: #fffef7;

          font-weight: 500;
          font-size: 20px;
          line-height: 39px;
          letter-spacing: 0.03em;

          @media (max-width: 580px) {
            font-size: 20px;
            line-height: 24px;
            min-width: 256px !important;
          }
        }

        button {
          position: relative;
          left: -2px;
          background: #ff8989;
          color: #ffffff;
          border: 2px solid #3f2d1c;
          border-radius: 0 25px 25px 0px;
          padding: 0 50px;

          font-weight: 500;
          font-size: 20px;
          line-height: 39px;
          letter-spacing: 0.03em;
        }
      }

      .desc {
        font-weight: 500;
        font-size: 20px;
        line-height: 39px;
        letter-spacing: 0.03em;
        color: #3f2d1c;
        margin-bottom: 10px;

        @media (max-width: 1200px) {
          font-size: 16px;
          line-height: 24px;
        }
      }

      .links {
        display: flex;
        margin-bottom: 55px;

        @media (max-width: 1200px) {
          justify-content: center;
          margin: 20px 0 45px 0;
        }

        span {
          margin-right: 21px;
        }

        img {
          width: 48px;
        }
      }
    }

    .postman {
      max-width: 829px;
      max-height: 951px;
      width: 40%;
      position: absolute;
      left: 0;
      bottom: 0;
      pointer-events: none;

      @media (max-width: 1200px) {
        min-width: 300px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const NewsletterTitle = styled(Title)`
  font-weight: bold;
  font-size: 47px;
  line-height: 66px;
  color: #3f2d1c;
  text-shadow: 6px 6px 5px rgb(233 211 169 / 50%);
  margin-bottom: 80px;
  letter-spacing: 0.05em;
  font-family: Arvo;

  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 30px;
    margin-top: 0;
  }

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 580px) {
    font-size: 28px !important;
    line-height: 40px !important;
    font-size: 32px;
    margin-top: 0;
  }
`;
