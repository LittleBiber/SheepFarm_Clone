import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;

  @media (max-width: 720px) {
    justify-content: space-between;
    align-items: flex-start;
  }

  .comp-select {
    width: 376px;

    @media (max-width: 1100px) {
      width: 34.18182vw;
    }

    @media (max-width: 720px) {
      height: auto;
    }

    .comp-select-bx {
      position: relative;

      .comp-select-item {
        position: absolute;
        z-index: 1;

        @media (max-width: 720px) {
          position: relative;
        }

        div {
          cursor: pointer;

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

          :hover {
            color: #fd7e14;
          }

          @media (max-width: 1100px) {
            width: 32.36364vw;
            height: 23.36364vw;
            top: 6.27273vw;
            left: 0.90909vw;
          }

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

          span {
            display: flex;
            flex-direction: column;
            align-items: center;

            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.015em;

            @media (max-width: 1100px) {
              font-size: 2.18182vw;
              line-height: 3.27273vw;
            }

            @media (max-width: 720px) {
              padding: 0 4.6729vw;
              font-size: 3.27103vw;
              line-height: 4.90654vw;

              // img {
            }

            img {
              width: 124px;

              @media (max-width: 1100px) {
                width: 13.63636vw;
              }

              @media (max-width: 720px) {
                width: 74px;
              }
            }

            p {
              margin-top: 0;
              margin-bottom: 1rem;
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

    // 이 부분은 아이템을 실제로 추가해봐야 알 수 있을 것 같은데
    .comp-select__item--name {
      display: none;
      margin-top: 10px;
      color: #6f5246;
      text-align: center;
    }
  }

  .morphing-plus {
    position: relative;
    top: 170px;
    padding-bottom: 40px;
    width: 56px;
    margin: 0 22px;

    @media (max-width: 1100px) {
      top: 15.45455vw;
      padding-bottom: 3.63636vw;
      width: 5.09091vw;
      margin: 0 2vw;
    }

    @media (max-width: 720px) {
      top: 0vw;
      padding-bottom: 0;
      width: 5.60748vw;
      margin: 14.71963vw 3.97196vw 0;
    }
  }
`;

export const ButtonBox = styled.div`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    margin-top: 9.34579vw;
  }

  .comp-btn-default {
    width: 300px;

    @media (max-width: 720px) {
      width: 100%;
    }

    button {
      font-family: "Poppins";
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.015em;

      border: 1px solid grey;

      display: flex;

      justify-content: center;

      align-items: center;
      width: 100%;
      height: 60px !important;
      border-radius: 12px;
      transition: -webkit-transform 0.1s;
      transition: transform 0.1s;
      transition: transform 0.1s, -webkit-transform 0.1s;
      color: #fff;
    }
  }
`;
