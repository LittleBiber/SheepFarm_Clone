import styled from "styled-components";

export const Main = styled.div`
  background-color: white;
  z-index: 10;
  position: absolute;
  right: 0;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #e4bb88;
  border: 5px solid #504130;
  filter: drop-shadow(0px 5px 0px #000);
  bottom: 10px;

  span {
    pointer-events: none;
  }

  @media (min-width: 758px) {
    width: 350px;
    top: 100px;
  }

  @media (max-width: 757px) {
    width: calc(100% - 20px);
    top: calc(100% - 35%);
  }

  .spot-list-heading {
    background-color: #504130;
    color: white;
    padding: 6px 5px 5px 5px;
    box-sizing: border-box;
    width: calc(100% + 1px);
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    // span에는 따로 적용되는 속성 없었음

    span {
      font-family: Arial !important;
      font-stretch: 50%;
    }
  }

  #pastures-list {
    height: calc(100% - 30px);
    overflow-y: scroll;

    .selected {
      background: #643a3a !important;
    }

    .box_cover {
      padding: 4px;
      display: flex;
      justify-content: space-between;
      background: #ba8f5d;
      border-radius: 10px;
      margin: 10px;
      cursor: pointer;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        pointer-events: none;
      }

      .sector-id {
        color: "white";
        justify-content: center;
        font-family: Arial !important;

        @media (min-width: 758px) {
          width: 50px;
        }

        @media (max-width: 757px) {
          width: unset;
        }
      }

      .property {
        display: flex;
        align-items: center;
        color: white;
        font-family: Arial !important;

        @media (min-width: 758px) {
          padding: 0 5px;
        }

        img {
          @media (max-width: 757px) {
            width: 25px;
          }
        }
      }

      .sold-btn {
        text-align: center;
        background-color: #bf3f3f;
        color: white;
        cursor: pointer;
        padding: 0 6px;
        text-decoration: none;
        border-radius: 10px;
        border: none;
        font-size: 13px;
        font-family: "Arial";
        height: 28px;
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      height: 10%;
      background: #504130;
    }

    ::-webkit-scrollbar-track {
      background-color: #ba8f5d;
    }
  }
`;
