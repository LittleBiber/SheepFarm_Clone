import styled from "styled-components";

export const Main = styled.div`
  position: relative;

  .upgrades-select-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .comp-select {
      width: 376px;

      @media (max-width: 1100px) {
        height: auto;
      }

      @media (max-width: 1100px) {
        width: 34.18182vw;
      }

      .comp-select-bx {
        .comp-select-item {
          position: absolute;
          z-index: 1;

          @media (max-width: 720px) {
            position: relative;
          }

          .select-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 356px;
            height: 257px;
            text-decoration: none;
            color: #6f5246;
            position: relative;
            top: 69px;
            left: 10px;
            overflow: hidden;

            @media (max-width: 720px) {
              position: relative;
              width: 35.04673vw;
              height: 35.04673vw;
              left: 0;
              top: 0;
              background-color: #ffffff;
              border: 2px solid #eeeeee;
              border-radius: 12px;
              text-align: center;
            }

            @media (max-width: 1100px) {
              width: 32.36364vw;
              height: 23.36364vw;
              top: 6.27273vw;
              left: 0.90909vw;
            }

            span {
              display: inline-block;
              text-align: center;
              font-size: 24px;
              font-weight: 700;
              letter-spacing: -0.015em;
              color: #6f5246;

              @media (max-width: 720px) {
                padding: 0 4.6729vw;
                font-size: 3.27103vw;
                line-height: 4.90654vw;
              }

              @media (max-width: 1100px) {
                font-size: 2.18182vw;
                line-height: 3.27273vw;
              }
            }

            img {
              width: 150px;
              display: none;

              @media (max-widht: 1100px) {
                width: 13.63636vw;
              }
            }
          }
        }

        .comp-select-bg {
          width: 100%;
          position: relative;

          @media (max-width: 720px) {
            display: none;
          }
        }
      }

      .comp-select__item--name {
        margin-top: 10px;
        color: #6f5246;
        text-align: center;

        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.015em;

        @media (max-widht: 1100px) {
          font-size: 2.18182vw;
          line-height: 3.27273vw;
        }

        @media (max-widht: 720px) {
          font-size: 3.73832vw;
          line-height: 5.60748vw;
        }
      }
    }
  }

  .upgrades-ic-plus {
    text-align: center;
    margin: 20px 0;

    img {
      width: 36px;
    }
  }

  .upgrades-select-list {
    margin-bottom: 40px;

    .upgrades-select-list-bx {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      ul {
        margin: 0;
        padding: 0;
        width: 830px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        @media (max-width: 1100px) {
          width: 455px;

          justify-content: flex-start;
        }

        @media (max-width: 720px) {
          width: 100%;
          justify-content: flex-start;
          gap: 3.73832vw;
        }

        li {
          position: relative;

          @media (max-width: 1100px) {
            flex-shrink: 0;
          }

          @media (max-width: 720px) {
            flex-shrink: 0;
          }

          div:nth-child(1) {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 150px;
            overflow: hidden;
            background-color: #d6d6d6;
            border: 2px solid #bbbbbb;
            border-radius: 8px;
            text-decoration: none;

            @media (max-width: 1100px) {
              width: 75px;
              height: 75px;
            }

            @media (max-width: 720px) {
              width: 17.52336vw;
              height: 17.52336vw;
            }

            span {
              color: #6f5246;
              display: none;

              @media (max-width: 1100px) {
                text-align: center;
                font-size: 14px;
                font-weight: 400;
              }

              @media (max-width: 720px) {
                line-height: 4.43925vw;
                padding: 0 1.16822vw;
                text-align: center;
                font-size: 3.27103vw;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }

  .upgrades-gage {
    overflow: hidden;
    width: 830px;
    margin: 0 auto 40px;

    @media (max-width: 1100px) {
      width: 358px;
    }

    .upgrades-gage-bx {
      position: relative;
      text-align: center;

      .upgrades-gage__txt {
        // transform: translateX(50%);

        span {
          display: inline-block;
          font-size: 16px;
          line-height: 24px;
          color: #6f5246;
          font-weight: 700;
          // transform: translateX(-50%);
        }
      }

      .upgrades-gage-bx {
        display: block;
        left: 0;
        top: 0;
        position: relative;
        z-index: 1;
        overflow: hidden;
        height: 40px;
        width: 0%;

        .img-pc {
          display: none;

          position: relative;
          left: 9px;
          top: 9px;
          width: 810px;

          @media (min-width: 1100px) {
            display: none !important;

            width: 340px;
            height: 20px;
          }
        }

        .img-m {
          display: none;

          position: relative;
          left: 9px;
          top: 9px;
          width: 810px;

          @media (max-width: 1100px) {
            width: 340px;
            height: 20px;
            display: none;
          }
        }
      }
    }

    .upgrades-gage-bg {
      height: 40px;
      width: 100%;
      border: 2px solid #49352d;
      border-radius: 60px;
      background-color: #6f5246;
      position: absolute;
      left: 0;
      top: 26px;

      @media (max-width: 1100px) {
        top: 23px;
      }
    }
  }

  .upgrades-gage__info {
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #6f5246;
    font-weight: 700;
  }

  .upgrades-btn-bx {
    display: flex;
    justify-content: center;
    align-items: center;

    .comp-btn-default {
      width: 300px;

      button {
        font-family: "Poppins";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px !important;
        border-radius: 12px;
        transition: transform 0.1s;
        transition: transform 0.1s, -webkit-transform 0.1s;
        color: #fff;

        border: 1px solid grey;

        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.015em;
      }

      div {
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        color: #6f5246;
      }
    }
  }

  .maintenance {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    background-color: #000000c4;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    z-index: 100;
  }
`;
