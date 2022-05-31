import styled from "styled-components";

export const Main = styled.div`
  background: #fff8e2;
  position: relative;
  padding: 70px 0;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  user-select: none;

  @media (max-width: 1000px) {
    position: relative;
  }

  @media (max-width: 580px) {
    min-height: unset;
    padding: 70px 0 0 0;
  }

  .page-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    width: 1300px;

    .pin_wrapper {
      margin-bottom: 25px;
    }

    .feature_title {
      font-family: Arvo;
      font-weight: bold;
      font-size: 47px;
      line-height: 66px;
      text-align: center;
      letter-spacing: 0.05em;
      color: #75594e;
      padding-bottom: 30px;

      @media (max-width: 1000px) {
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.05em;
        padding-bottom: 40px;
      }

      @media (max-width: 580px) {
        padding-bottom: 0;
        font-size: 28px !important;
        line-height: 40px !important;
      }
    }

    .side_image {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 300px;
      z-index: 1;
    }

    .box_wrapper {
      position: relative;
      transform: scale(0.9);

      @media (max-width: 580px) {
        transform: scale(0.8) translateY(-5%);
      }
    }

    .boxes {
      transform: translateX(0px);
      display: flex;
      gap: 20px;
      transition: all 0.5s;

      @media (max-width: 1000px) {
        transform: translateX(${({ offset }) => offset}px);
        position: relative;
        padding-bottom: 30px;
        gap: 140px;
      }
    }

    input[type="radio"] {
      display: hidden;
    }
  }

  .bg-char {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
  }
`;
