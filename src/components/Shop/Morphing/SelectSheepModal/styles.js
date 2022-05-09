import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: ${({ modal }) => (modal ? "flex" : "none")};

  justify-content: center;

  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 20;
  overflow-x: auto;

  .select-morph-sheep {
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

      @media (max-width: 1100px) {
        top: -35px;
        right: 35px;
      }
    }

    .comp-select-popup {
      width: 714px;
      background-color: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      border: 4px solid #5e4038;

      @media (max-width: 1100px) {
        width: 428px;
      }

      .comp-select-popup-bx {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 0px 0px;

        .comp-select__title {
          text-align: center;
          margin-bottom: 20px;

          @media (max-width: 1100px) {
            margin-bottom: 0;
          }

          .gender {
            color: #6f5246;
            margin-bottom: 5px;

            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.015em;

            @media (max-width: 1100px) {
              font-size: 20px;
              line-height: 30px;
              margin-bottom: 0;
            }
          }

          dd {
            color: #6f5246;
            margin: 0;

            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0.05em;

            @media (max-width: 1100px) {
              font-size: 16px;
              line-height: 24px;
              margin: 0;
            }
          }
        }

        .comp-select-category {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          margin-top: 20px;
          justify-content: center;
          align-items: center;

          @media (max-width: 1100px) {
            padding: 0 35px;
          }

          .comp-btn-default {
            margin-right: 10px;
            width: auto;
            display: inline-block;

            button {
              height: 39px !important;
              padding: 0 30px;
              width: 100%;
              font-size: 18px;
              font-weight: bold;
              line-height: 27px;

              border-radius: 40px;
              background-color: #ffffff;
              border: 2px solid #e3d8c4;
              color: #6f5246;

              @media (max-width: 1100px) {
                height: 45px !important;
                padding: 0 20px;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: 1px;
                border-radius: 30px;
              }
            }
          }

          .on button {
            background-color: #ffec9e;
          }
        }

        .comp-no-item {
          margin-top: 22px;

          @media (max-width: 720px) {
            width: 428px;
          }

          dl {
            margin: 0;

            dt {
              text-align: center;
              margin-bottom: 10px;
              font-weight: 700;

              img {
                width: 340px;

                @media (max-width: 1100px) {
                  width: 230px;
                }
              }
            }

            dd {
              text-align: center;
              font-size: 32px;
              line-height: 56px;
              font-weight: 800;
              color: #6f5246;
              margin-bottom: 40px;

              @media (max-width: 1100px) {
                font-size: 24px;
                line-height: 31px;
              }
            }
          }
        }

        .comp-select-list {
          display: flex;
          width: 100%;
          height: 447px;
          display: none;
          justify-content: flex-start;
          padding: 0 55px;
          margin-top: 30px;

          .select-list__btn {
            opacity: 0.1;

            display: inline-block;
            width: 20px;
            flex-shrink: 0;
            margin-right: 26px;
            padding-bottom: 50px;
            margin-top: 177px;
            margin-right: 26px;

            img {
              width: 100%;
            }
          }

          .swiper-bx {
            width: 510px;
            height: 380px;
          }
        }
      }
    }
  }
`;
