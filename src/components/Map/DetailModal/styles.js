import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000000b3;
  z-index: 9999;
  overflow: scroll;
  user-select: none;

  @media (min-width: 757px) {
    overflow-y: scroll;
  }
`;

export const PurchaseDetailModal = styled.div`
  display: flex;
  font-family: Noto Sans CJK KR !important;

  @media (min-width: 758px) {
    width: 630px;
    height: 400px;
    left: calc(50% - 250px);
    top: calc(50% - 255px);

    align-items: flex-end;
    position: fixed;
  }

  @media (max-width: 757px) {
    position: relative;

    width: 90vw;
    height: 400px;
    left: 5vw;
    top: 5vw;
  }

  .content-area {
    background: url(/DetailModal/note_top.png) repeat-x;
    background-size: 30px;
    height: 100%;
    width: 100%;

    flex-direction: column;

    .heading-area {
      margin-top: 30px;
      background-color: #fef7e2;

      .pasture-detail-title {
        padding: 10px 25px 0 25px;
        font-weight: 700;
        color: #41322a;
        font-size: 18px;
        font-family: Noto Sans CJK KR !important;
      }

      .country-location {
        font-family: Noto Sans CJK KR !important;
        margin: 10px 25px 0 25px;
        font-size: 25px;
        border-bottom: 1px solid #ddd5be;
      }
    }

    .text-area {
      background-color: #fef7e2;
      box-sizing: border-box;
      display: flex;

      @media (min-width: 758px) {
        flex-direction: row;
      }

      @media (max-width: 757px) {
        flex-direction: column;
      }

      .contents {
        position: relative;

        .properties {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;

          .property {
            font-family: Noto Sans CJK KR !important;
            background-color: #ba8f5d;
            border-radius: 25px;
            color: white;
            display: flex;
            width: 100px;
            align-items: center;
            justify-content: space-between;
            padding: 2px 15px 2px 5px;
            margin: 10px;
            font-weight: 700;

            #farm-detail-size {
              font-family: Noto Sans CJK KR !important;
              font-weight: 700;
            }
          }
        }

        .pasture-number {
          font-family: Noto Sans CJK KR !important;
          margin: 0px 20px 0 20px;
          border-bottom: 1px solid #ddd5be;
          font-weight: 600;
          padding-bottom: 7px;

          .owner-info {
            font-family: Noto Sans CJK KR !important;
            font-size: 13px;
            font-weight: 500;
          }
        }

        .pasture-desc {
          margin: 15px 20px 0 20px;
          padding-bottom: 7px;

          p {
            letter-spacing: -0.2px;
            font-family: Noto Sans CJK KR !important;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }
        }

        .charcter-area {
          position: absolute;
          bottom: 0;
          left: -210px;

          @media (max-width: 757px) {
            display: none;
          }
        }
      }

      .preview {
        text-align: center;

        .im {
          box-sizing: border-box;
          margin: 20px;
          border: 1px solid #ddd5be;
          display: inline-block;

          @media (min-width: 758px) {
            width: 250px;
            height: 220px;
          }

          @media (max-width: 757px) {
            width: 250px;
            height: 200px;
            background-position: top 400px left -180px;
          }
        }

        .btn {
          margin-bottom: 25px;

          height: 30px;
          border: 0;
          color: white;
          border-radius: 14px;
          box-sizing: border-box;
          margin-left: 5px;
          color: white;
          cursor: pointer;
          width: 250px;
        }

        #occupied-btn,
        #close-btn {
          background-color: #a72b22;
        }

        #locked-btn {
          background-color: #584342;
          cursor: unset !important;
        }

        #purchase-btn {
          background-color: #4c9933;
        }
      }
    }
  }
`;
