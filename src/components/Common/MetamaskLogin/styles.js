import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  align-items: center;

  .header {
    height: 64px;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;

    .header-background {
      position: absolute;
      background-color: #f2f4f6;
      z-index: 2;
      width: 100%;
      height: 100%;
    }

    .header-text {
      font-size: 1.5rem;
      font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
      line-height: 140%;
      font-style: normal;
      font-weight: normal;
      color: var(--color-default-text);
      z-index: 3;
    }

    .header-tip-container {
      width: 100%;
      display: flex;
      justify-content: center;

      .header-tip {
        height: 25px;
        width: 25px;
        background: #f2f4f6;
        transform: rotate(45deg);
        position: absolute;
        bottom: -8px;
        z-index: 1;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;

    .account-info {
      display: flex;
      justify-content: space-between;
      margin-top: 18px;
      margin-bottom: 20px;

      .account {
        color: #535a61;
        margin-left: 17px;

        .account-text {
          font-size: 0.875rem;
          font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
          line-height: 140%;
          font-style: normal;
          font-weight: normal;
        }

        .account-item {
          font-size: 0.75rem;
          font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
          line-height: 140%;
          font-style: normal;
          font-weight: normal;
          height: 22px;
          width: 124px;

          .account-list-item {
            margin-top: 6px;

            .account-list-item__top-row {
              margin: 0;
              display: flex;
              position: relative;

              div: nth-child(1) {
                height: 18px;
                width: 18px;
                border-radius: 9px;

                direction: ltr;
                display: flex;
                flex-shrink: 0;
                align-items: center;
                justify-content: center;
                overflow: hidden;

                background: rgb(242, 190, 2);
              }

              div: nth-child(2) {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                width: 80px;

                font-size: 1rem;
                font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
                line-height: 140%;
                font-style: normal;
                font-weight: normal;
                margin-left: 8px;
              }
            }
          }
        }
      }

      .request-icon {
        color: #535a61;
        margin-top: 25px;

        div {
          height: 40px;
          width: 40px;
          border-radius: 20px;

          border: 1px solid #bbc0c5;
          background: white;
        }
      }

      .balance {
        color: #535a61;
        margin-right: 17px;
        width: 124px;
        text-align: right;

        .balance-text {
          font-size: 0.875rem;
          font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
          line-height: 140%;
          font-style: normal;
          font-weight: normal;
          text-align: right;
        }

        .balance-value {
          text-align: right;
          margin-top: 2.5px;
        }
      }
    }

    .origin-row {
      font-size: 1rem;
      font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
      line-height: 140%;
      font-style: normal;
      font-weight: normal;
      display: flex;
      margin: 0 15px;

      div: nth-child(1) {
        flex-grow: 1;
        margin-right: 5px;
      }

      div: nth-child(2) {
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .notice {
      color: #535a61;
      padding: 0 10px;

      font-size: 0.875rem;
      font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
      line-height: 140%;
      font-style: normal;
      font-weight: normal;
      text-align: center;
      margin-top: 41px;
      margin-bottom: 11px;
      width: 100%;
    }

    .signature-rows {
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      border-top: 1px solid #bbc0c5;
      display: flex;
      flex-flow: column;

      .signature-row {
        display: flex;
        flex-flow: column;
        flex: 1 0 auto;

        .row-title {
          font-size: 1rem;
          font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
          line-height: 140%;
          font-style: normal;
          font-weight: normal;
          width: 80px;
          color: #535a61;
          margin-top: 12px;
          margin-left: 18px;
          width: 100%;
        }

        .row-value {
          font-size: 0.875rem;
          font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
          line-height: 140%;
          font-style: normal;
          font-weight: normal;
          color: #535a61;
          width: 100%;
          overflow-wrap: break-word;
          border-bottom: 1px solid #bbc0c5;
          padding: 6px 18px 15px;
          white-space: pre-wrap;
        }
      }
    }
  }

  .footer {
    font-size: 1.5rem;
    font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
    line-height: 140%;
    font-style: normal;
    font-weight: normal;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 0 0 auto;
    border-top: 1px solid #bbc0c5;
    padding: 1.6rem;

    .button {
      font-size: 0.875rem;
      font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
      line-height: 140%;
      font-style: normal;
      font-weight: normal;
      font-weight: 500;
      padding: 0.75rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-radius: 6px;
      width: 100%;
      transition: border-color 0.3s ease, background-color 0.3s ease;
      border: 0;
    }

    .cancel-button {
      border: 1px solid #037dd6;
      background: white;
      width: 165px;
      border-radius: 100px;
      will-change: box-shadow;
      transition: box-shadow cubic-bezier(0.6, -0.28, 0.735, 0.045) 200ms;
      min-height: 54px;
      margin-right: 1.2rem;
      color: #037dd6;
    }

    .sign-button {
      border: 1px solid #037dd6;
      background-color: #037dd6;
      width: 165px;
      border-radius: 100px;
      will-change: box-shadow;
      transition: box-shadow cubic-bezier(0.6, -0.28, 0.735, 0.045) 200ms;
      min-height: 54px;
      color: white;
    }
  }
`;
