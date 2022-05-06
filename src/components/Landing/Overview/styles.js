import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  background-color: #576d40;
  background-image: url("/Overview/overview-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 580px) {
    min-height: 800px;
  }

  .container {
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    @media (max-width: 1100px) {
      padding: 0 50px;

      flex-direction: column-reverse;
      align-items: center;
    }

    @media (max-width: 1000px) {
      padding: 0 50px;
      box-sizing: border-box;
    }

    .content-wrapper {
      --bs-gutter-x: 1.5rem;
      --bs-gutter-y: 0;
      display: flex;
      flex-wrap: wrap;
      margin-top: calc(-1 * var(--bs-gutter-y));
      margin-right: calc(-0.5 * var(--bs-gutter-x));
      margin-left: calc(-0.5 * var(--bs-gutter-x));

      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .image-container {
        // flex: 0 0 auto;
        // width: 50%;

        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-top: var(--bs-gutter-y);

        img {
          position: absolute;
          left: 80px;
          animation: float ease-in-out 2s infinite alternate;
          filter: drop-shadow(24px 24px 15px rgba(68, 89, 46, 0.76));
          transform: translateY(0);

          @keyframes float {
            0% {
              margin-top: 0px;
            }

            100% {
              margin-top: 20px;
            }
          }

          @media (min-width: 992px) {
            flex: 0 0 auto;
            width: 50%;
            max-width: 600px;
          }

          @media (max-width: 1100px) {
            animation: unset;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -60px;
            min-width: 600px;
            width: 50vw;
          }

          @media (max-width: 580px) {
            min-width: 400px;
          }
        }
      }
    }

    .left {
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);

      @media (min-width: 992px) {
        position: relative;
        flex: 0 0 auto;
        width: 50%;
        left: 50%;
      }

      @media (max-width: 1100px) {
        position: absolute;
        top: 80px;
      }

      .pin_wrapper {
        @media (max-width: 1000px) {
          text-align: center;
        }
      }

      .row div {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-top: var(--bs-gutter-y);
      }

      .title {
        color: #fff8e2;
        font-style: normal;
        font-weight: bold;
        font-size: 47px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-bottom: 20px;

        @media (max-width: 1000px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 500px;
        }

        @media (max-width: 580px) {
          font-size: 28px !important;
          line-height: 40px !important;
        }
      }

      .shadow {
        text-shadow: 2px 6px 7px rgb(68 89 46 / 76%);
      }

      .description {
        display: flex;
        flex-direction: column;
        align-itmes: flex-start;

        color: #fff8e2;
        font-size: 20px;
        font-weight: 500;

        @media (max-width: 1100px) {
          width: 500px;
        }

        @media (max-width: 1000px) {
          width: 500px;
        }

        @media (min-width: 992px) {
          flex: 0 0 auto;
          width: 85%;
        }

        @media (max-width: 580px) {
          font-size: 14px;
          line-height: 25px;
          text-align: center;
          letter-spacing: 0.03em;
        }
      }

      .banner_small {
        margin-top: 30px;
        display: inline-flex;
        flex-direction: column;
        gap: 10px;

        .banner {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          width: 200px;
          background-color: #ffd668;
          border: 3px solid #92552f;
          box-sizing: border-box;
          border-radius: 8px;
          padding: 10px 5px 10px 20px;

          @media (max-width: 1100px) {
            text-align: center;
            margin: 0 auto;
            width: 170px !important;
            padding: 10px 5px 10px 10px;

            img {
              text-align: center;
              margin: 0 auto;
              width: 170px !important;
            }
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
          }
        }

        .avail_web {
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
`;
