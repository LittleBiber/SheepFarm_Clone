import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  background-color: #576d40;
  background-image: url(/Overview/overview-bg.png);
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 580px) {
    min-height: 800px;
  }

  .page-container {
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    @media (max-width: 1100px) {
      padding: 0 50px;
    }

    @media (max-width: 1000px) {
      box-sizing: border-box;
    }
  }

  .mobile-flex-vertical {
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));

    @media (min-width: 992px) {
      justify-content: center;
    }

    > * {
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }

    .section-title {
      font-style: normal;
      font-weight: bold;
      font-size: 47px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 20px;

      @media (max-width: 1000px) {
        width: 500px;
      }

      .overview-shadow {
        color: #fff8e2;
        text-shadow: 2px 6px 7px rgb(68 89 46 / 76%);
        font-family: Arvo;
        line-height: 66px;

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
      }
    }

    .section-desc {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      font-weight: 500;
      color: #fff8e2;
      line-height: 30px;

      @media (max-width: 1000px) {
        width: 500px;
      }

      @media (max-width: 580px) {
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.03em;
        font-size: 14px !important;
      }

      .mobile-banner {
        margin-top: 30px;
        display: inline-flex;
        flex-direction: column;
        gap: 10px;

        .icon-pasture {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          width: 200px;
          background-color: #ffd668;
          border: 3px solid #92552f;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 8px;
          padding: 10px 5px 10px 20px;

          @media (max-width: 1100px) {
            text-align: center;
            margin: 0 3px;
            width: 170px !important;
            padding: 10px 5px 10px 10px;
          }

          img {
            width: 55px !important;
            height: 40px;
          }

          span {
            text-align: center;
            color: #553b2a;
            font-size: 18px;
            line-height: 1.2;
            font-weight: bold;
            word-break: keep-all;
          }
        }

        img {
          cursor: pointer;
          width: 200px;

          @media (max-width: 1100px) {
            text-align: center;
            margin: 0 auto;
            width: 170px !important;
          }
        }
      }
    }
  }

  .align-items-center {
    align-items: center !important;
  }

  .col-lg-6 {
    @media (min-width: 992px) {
      flex: 0 0 auto;
      width: 50%;
    }

    .overview-img {
      position: relative;
      left: -80px;
      filter: drop-shadow(24px 24px 15px rgba(68, 89, 46, 0.76));

      animation: float ease-in-out 2s infinite alternate;
      @keyframes float {
        0% {
          top: 0px;
        }

        100% {
          top: 30px;
        }
      }

      @media (max-width: 1100px) {
        animation: unset;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -60px;
        z-index: 0;
        min-width: 600px;
        width: 50vw;
      }

      @media (max-width: 580px) {
        min-width: 400px;
      }
    }
  }

  .contents {
    @media (min-width: 992px) {
      flex: 0 0 auto;
      width: 50%;
    }

    @media (max-width: 1100px) {
      position: absolute;
      top: 80px;
      width: auto;
    }

    .pin-wrapper {
      margin-bottom: 25px;
    }
  }

  @media (min-width: 992px) {
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
      align-items: center;
    }
  }
`;
