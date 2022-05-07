import styled from "styled-components";

export const Main = styled.div`
  ${({ modal }) => (modal ? "" : "display: none")};

  .page-container {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--measure-height, calc(100vh - 1px));
    background-color: rgba(255, 248, 226, 0.7);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;

    .panel {
      position: relative;

      .panel-bg {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .close-btn {
          position: relative;
          top: -5px;
          right: 15px;
          cursor: pointer;
          width: 35px;
          height: 31px;
          background-image: url(/Luckybox/icon-menu-close.svg);
          background-repeat: no-repeat;
        }

        img {
          max-width: 750px;
          max-height: 90vh;
          min-height: 550px;

          @media (max-width: 1000px) {
            max-width: 650px;
          }

          @media (max-width: 768px) {
            max-width: 600px;
          }

          @media (max-width: 580px) {
            max-width: 500px;
          }
        }
      }

      .panel-contents {
        position: absolute;
        top: 31px;
        left: 0;
        width: 100%;
        height: 90%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        @media (max-width: 580px) {
          height: 85%;
          padding: 0 20px;
        }

        .title {
          color: #75594e;
          font-weight: 900;
          letter-spacing: 0.05em;
          margin-top: 35px;
          margin-bottom: 15px;

          font-size: 24px;
          line-height: 36px;

          padding: 0;
        }

        .table-wrapper {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          justify-content: center;
          width: calc(100% - 70px);
          padding: 0 40px;
          margin-bottom: 30px;
          gap: 18px;
          overflow-y: scroll;
          overflow-x: hidden;
          box-sizing: border-box;

          @media (max-width: 580px) {
            flex: unset;
            display: unset;
            gap: unset;
            width: 100%;
          }

          .sheep-table,
          .deco-table {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;

            @media (max-width: 580px) {
              margin-bottom: 30px;
            }
          }

          .table-title {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: white;
            margin-bottom: 20px;
          }

          .head {
            padding-bottom: 5px;
            border-bottom: 1px solid #75594e;
            font-size: 18px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.8);
            margin-bottom: 20px;

            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .body {
            width: 100%;

            .rank-row {
              margin-bottom: 35px;

              div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-weight: bold;

                span {
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: 0.05em;
                }
              }
            }

            .rank-title {
              font-size: 14px;
              font-weight: 700;
              margin-bottom: 10px;
            }

            .t-row {
              font-size: 13px;
              font-weight: normal;
              letter-spacing: 0.03em;

              display: flex;
              justify-content: space-between;
              width: 100%;
            }

            .Epic-row,
            .Rare-row,
            .Normal-row,
            .Ornamental-row,
            .Interactive-row {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }

  .dimmed-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background-color: transparent;
  }

  .table-wrapper::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  .table-wrapper::-webkit-scrollbar-thumb {
    background: #75594e; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
`;
