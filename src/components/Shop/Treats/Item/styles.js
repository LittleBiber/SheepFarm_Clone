import styled from "styled-components";

export const Main = styled.div`
  width: 405px;
  border-radius: 22px;
  border: 2px solid #ecc66a;
  padding: 28px 23px 49px;
  background-color: #fff;
  box-sizing: border-box;

  .item-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 320px;
    border-radius: 18px;
    overflow: hidden;
    border: 2px solid #eeeeee;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      transition: width 0.2s, height 0.2s;
    }

    :hover img {
      width: 180px;
      height: 180px;
    }
  }

  .item-description-bx {
    padding-top: 28px;

    margin-top: 0; // dl 기본 마진이 있는건가?
    margin-bottom: 1rem;

    .item-name {
      font-weight: 400;
      line-height: 20px;
      color: #6f5246;
      margin-bottom: 5px;

      font-size: 24px;
      letter-spacing: -0.015em;
    }

    .item-price {
      color: #6f5246;
      margin-bottom: 16px;

      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.015em;

      margin-left: 0; // dd 기본으로 margin-left가 주어지는듯
    }

    .item-description {
      font-size: 20px;

      color: #6f5246;
      height: 100px;
      overflow: hidden;
      text-overflow: ellipsis;

      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0.05em;

      margin-left: 0;

      span {
        font-weight: bold;

        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.05em;
      }
    }
  }

  .item-control {
    padding: 0 1.38889vw; // 미디어 쿼리 (max-width: 1440px)가 걸려있음

    .comp-count-bx {
      .comp-count {
        border-radius: 20px;
        border: 2px solid #6f5246;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0px 42px;
        height: 55px;
        box-sizing: border-box;

        button {
          background-color: transparent;
          flex-shrink: 0;

          font-size: 24px;
          font-weight: 700;
          line-height: 36px;
          letter-spacing: -0.015em;

          // 이 2가지는 버튼 기본값으로 들어가있는듯
          border: none;
          outline: none;

          cursor: pointer;
        }

        input {
          width: 100%;
          border: none;
          text-align: center;
          background-color: transparent;

          font-size: 24px;
          font-weight: 700;
          line-height: 36px;
          letter-spacing: -0.015em;
        }
      }

      .total-price {
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 20px;

        dt {
          font-size: 20px;
          line-height: 1.38889vw;
          font-weight: 400;
        }

        dd {
          font-size: 1.66667vw;
          line-height: 1.66667vw;

          flex-shrink: 0;
          margin: 0;
          color: #ff7f22;

          font-weight: 700;
          letter-spacing: -0.015em;

          span:nth-child(1) {
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.015em;

            @media (max-width: 720px) {
              font-size: 4.6729vw;
              line-height: 7.00935vw;
            }
          }
        }
      }
    }

    .item-buy-btn button {
      font-family: "Poppins";
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
      background-color: #ff7f22;
      border: 2px solid #df650d;

      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.015em;
    }
  }

  @media (max-width: 1440px) {
    width: 28.125vw;

    .item-view {
      height: 22.22222vw;
    }

    .item-description-bx {
      .item-description {
        font-size: 1.38889vw;

        span {
          font-size: 1.38889vw;
        }
      }
    }

    .item-control {
      padding: 0 1.38889vw;

      .comp-count-bx {
        .total-price {
          font-size: 1.38889vw;
          line-height: 1.38889vw;

          dt {
            font-size: 1.38889vw;
            line-height: 1.38889vw;
          }

          dd {
            font-size: 1.66667vw;
            line-height: 1.66667vw;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    width: 43.05556vw;

    .item-view {
      height: 34.54545vw;
    }

    .item-description-bx {
      .item-description {
        font-size: 1.81818vw;

        span {
          font-size: 1.81818vw;
        }
      }
    }

    .item-control {
      padding: 0 1.81818vw;

      .comp-count-bx {
        .total-price {
          font-size: 1.81818vw;
          line-height: 1.81818vw;

          dt {
            font-size: 1.81818vw;
            line-height: 1.81818vw;
          }

          dd {
            font-size: 2.18182vw;
            line-height: 2.18182vw;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    padding: 5.60748vw 6.07477vw 8.8785vw 5.37383vw;

    .item-view {
      height: 65.42056vw;
    }

    .item-description-bx {
      margin-bottom: 0;

      .item-name {
        font-size: 5.60748vw;
        line-height: 4.6729vw;
      }

      .item-price {
        font-size: 5.60748vw;
      }

      .item-description {
        margin-bottom: 4.6729vw;
        line-height: 5.84112vw;
        font-size: 4.6729vw;
        height: 23.36449vw;

        span {
          line-height: 5.84112vw;
          font-size: 4.6729vw;
        }
      }
    }

    .item-control {
      padding: 0 4.6729vw;

      .comp-count-bx {
        .comp-count {
          padding: 0 8.64486vw;
        }

        .total-price {
          margin-top: 4.20561vw;
          margin-bottom: 3.03738vw;

          dt {
            font-size: 3.73832vw;
            line-height: 7.00935vw;
          }

          dd {
            font-size: 4.6729vw;
            line-height: 7.00935vw;

            span {
              font-size: 4.6729vw;
              line-height: 7.00935vw;
            }
          }
        }
      }
    }
  }
`;
