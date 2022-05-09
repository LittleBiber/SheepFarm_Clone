import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff8e2;
  position: relative;

  .selector-wrapper {
    display: flex;
    flex-direction: column;
    width: 1440px;
  }
`;

export const TypeSelector = styled.div`
  background-image: url(/Inventory/bg_menu_bx.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 20px;

  @media (max-width: 1100px) {
    padding-top: 0;
  }

  @media (max-width: 720px) {
    padding-top: 2.33645vw;
    padding-bottom: 1.63551vw;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 160px;
    margin: 0;
    padding: 0;
    font-size: 0;

    @media (max-width: 720px) {
      height: 19.85981vw;
    }
  }

  li {
    padding: 0;
    list-style: none;
    margin: 0 41px 0 0;

    :nth-child(5) {
      margin: 0;
    }

    @media (max-width: 1100px) {
      margin-right: 15px;
    }

    @media (max-width: 720px) {
      margin-right: 2.33645vw;
    }
  }

  button {
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border: 3px solid rgba(0, 0, 0, 0);
    border-top: none;
    padding: 0 15px 13px;
    background-color: transparent;
    box-sizing: border-box;
    height: 160px;
    cursor: pointer;

    @media (min-width: 1440px) {
      :hover p {
        padding-top: 0;
      }
    }

    @media (max-width: 720px) {
      padding-left: 1.86916vw;
      padding-right: 1.86916vw;
      height: 19.85981vw;
    }

    p {
      margin: 0;
      height: 105px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      box-sizing: border-box;

      jusitfy-contents: center;

      transition: padding-top 0.2s;

      @media (max-width: 720px) {
        padding-top: 9px;
        height: 8.17757vw;
        margin-bottom: 2.33645vw;
      }

      img {
        width: 60px;

        @media (max-width: 720px) {
          width: 7.00935vw;
        }
      }

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: #fff8e2;
        border-radius: 100%;
        margin-right: 7px;

        @media (max-width: 720px) {
          width: 1.40187vw;
          height: 1.40187vw;
          margin-right: 0.70093vw;
        }
      }
    }

    dl {
      margin: 0;

      dt {
        color: #fff8e2;
        font-weight: 400;

        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;

        @media (max-width: 720px) {
          font-size: 2.80374vw;
          line-height: 2.80374vw;
          margin-bottom: 1.16822vw;
        }
      }

      dd {
        margin: 0;
        font-weight: 400;
        color: #fff8e2;

        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;

        @media (max-width: 720px) {
          font-size: 2.80374vw;
          line-height: 2.80374vw;
        }
      }
    }

    .selected {
      color: #ffd600;
      font-weight: 700;
    }
  }
`;

export const WorldSelector = styled.div`
  background-color: #75594e;
  margin-top: -1px;
  font-weight: 900;

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0 0px 0 0;
  }

  button {
    cursor: pointer;
    width: 344px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: none;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #75594e;

    span {
      color: #fff8e2;
      font-weight: 800;
      opacity: 0.5;
      line-height: 30px;
      letter-spacing: 1px;
      font-size: 20px;
    }
  }

  .checked {
    background-color: #fff8e2;

    span {
      color: #44362a;
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    padding: 0;

    li {
      width: 50%;
      margin-right: 0;

      button {
        width: 100%;
        height: 11.68224vw;

        span {
          font-size: 3.27103vw;
        }
      }
    }
  }
`;
