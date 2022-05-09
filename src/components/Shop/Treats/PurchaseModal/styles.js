import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 20;
  overflow-x: auto;

  .page-container {
    .popup-content {
      position: relative;

      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        width: 35px;
        height: 31px;
        background-image: url(/Shop/icon-menu-close.svg);
        background-repeat: no-repeat;
        z-index: 10;
      }

      .comp-payment-receipt {
        width: 100%;
        height: 100%;

        // 박스크기가 맞을 생각을 안해서 비활성화 > 나중에 완성하고 주석 풀면 해결될려나
        position: absolute;
        left: 0;
        top: 0;
        padding: 91px 117px;

        @media (max-width: 720px) {
          padding: 11.4486vw 14.71963vw 9.34579vw 13.08411vw;
        }

        .comp-payment-receipt-title {
          width: 100%;
          text-align: center;
          margin-bottom: 56px;
          color: #75594e;

          dt {
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.015em;
          }

          dd {
            font-size: 20px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0.05em;
          }

          @media (max-widht: 720px) {
            margin-bottom: 7.00935vw;

            dt {
              font-size: 4.6729vw;
              line-height: initial;
            }

            dd {
              font-size: 3.73832vw;
              line-height: initial;
            }
          }
        }

        .payment-price-list {
          .comp-payment-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 25px 0;

            @media (max-width: 720px) {
              margin: 0;

              dt {
                font-size: 3.73832vw;
              }

              dd {
                font-size: 3.73832vw;
              }
            }

            dt {
              font-size: 20px;
              font-weight: 700;
              color: #75594e;
            }

            dd {
              color: #75594e;
              opacity: 0.8;
              margin: 0;

              font-size: 20px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0.05em;
            }
          }
        }

        .comp-dot__line {
          background-image: linear-gradient(
            to right,
            #75594e 40%,
            rgba(255, 255, 255, 0) 0%
          );
          background-position: bottom;
          background-size: 20px 2px;
          background-repeat: repeat-x;
          padding-bottom: 2px;

          @media (max-width: 720px) {
            margin: 1.16822vw 0;
          }
        }

        .payment-btn-bx {
          position: absolute;
          left: 0;
          bottom: 91px;
          width: 100%;
          text-align: center;

          @media (max-width: 720px) {
            bottom: 9.34579vw;

            .proceed-btn {
              width: 44.39252vw;

              .comp-btn-default {
                height: 50px;
                font-size: 20px;
              }
            }
          }

          .proceed-btn {
            display: inline-block;
            width: 300px;

            .comp-btn-default {
              display: flex;

              justify-content: center;

              align-items: center;
              width: 100%;
              height: 60px !important;
              border-radius: 12px;

              cursor: pointer;

              transition: transform 0.1s;
              transition: transform 0.1s, -webkit-transform 0.1s;
              color: #fff;
              border-color: #df650d;
              background-color: #ff7f22;

              font-size: 20px;
              font-weight: 600;

              :hover {
                filter: brightness(80%);
              }
            }
          }

          .login-wrapper {
            width: 419px;
            margin: auto;
          }
        }
      }

      .popup-content-bg {
        width: 650px;

        @media (max-width: 720px) {
          width: 84.11215vw;
        }
      }

      .img-pc {
        @media (max-width: 720px) {
          display: none;
        }
      }

      .img-m {
        @media (min-width: 720px) {
          display: none;
        }
      }

      .dimmed-bg {
        position: fixed;
        background-color: transparent;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
      }
    }
  }

  // .login-modal {
  //   position: absolute;
  //   left: 0;
  //   bottom: 180px;
  //   width: 100%;
  //   text-align: center;

  //   .login-wrapper {
  //     display: flex;
  //     justify-content: center;
  //     display: inline-block;
  //     width: 419px;
  //   }
  // }

  .hidden {
    display: none;
  }
`;
