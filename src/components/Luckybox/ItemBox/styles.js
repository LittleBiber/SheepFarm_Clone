import styled from "styled-components";

export const Main = styled.div`
  .soldout {
    filter: grayscale(100%);

    .img-wrap .soldout_txt {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      align-items: center;

      div {
        width: 100%;
        padding: 15px 0;
        font-size: 20px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
  }
`;

export const Content = styled.li`
  height: 100%;

  display: flex;

  flex-direction: column;
  background-color: #ffec9e;
  border: 2px solid #ecc66a;

  box-shadow: 0px 15px 21px #e8dcb5;
  border-radius: 22px;
  padding: 25px;

  .img-wrap {
    position: relative;
    background-color: white;
    border-radius: 18px;
    margin-bottom: 30px;

    img {
      width: 100%;
      padding: 64px 78px 48px;
      vertical-align: middle;
      box-sizing: border-box;
    }

    .soldout_txt {
      display: none;
    }
  }

  .probability-wrap {
    display: flex;
    justify-content: flex-end;

    .probability-btn {
      position: relative;
      right: -35px;
      padding: 10px 26px 10px 20px;
      background-color: #a88171;
      border-radius: 10px 0 0 10px;
      font-weight: 800;
      color: white;
      margin-bottom: 12px;

      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.05em;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #6f5246;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.05em;

    span:nth-of-type(1) {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    span:nth-of-type(2) {
      margin-bottom: 10px;
    }

    span:nth-of-type(3) {
      font-weight: bold;

      span {
        color: #ffa6a6;
      }
    }
  }

  .sales-date-info {
    display: flex;

    .sales-period {
      flex: 1;
      display: flex;

      flex-direction: column;
      text-align: center;
      font-weight: 700;
      color: #6f5246;
      margin-bottom: 16px;

      span:first-child {
        font-weight: bold;
      }

      span:last-child {
        font-size: 15px;
      }
    }
  }

  .payment-btn {
    padding: 10px;
    margin: 0 10px;

    color: white;
    background-color: #ff7f22;
    border: 2px solid #df650d;
    border-radius: 12px;

    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.015em;

    cursor: pointer;
  }
`;
