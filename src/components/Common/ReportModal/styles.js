import styled from "styled-components";

export const Main = styled.div`
  background-color: #fff8e2;
  position: fixed;
  width: 80%;
  top: calc(50% - 40%);
  left: calc(50% - 40%);
  z-index: 100;
  border: 3px solid #523e37;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 5px 5px 5px #0000009e;

  .box_top {
    display: flex;
    align-items: center;

    .report_img {
      width: 100px;
    }

    .report_title {
      padding-left: 20px;

      .report-popup-title {
        font-size: 25px;
      }
    }
  }

  .report_input {
    textarea {
      width: 100%;
      padding: 15px;
      margin-top: 10px;
      border: 0;
      color: #75594e;
      background-color: #fae8c4;
      border-radius: 20px;

      resize: vertical;

      resize: vertical;
      margin-top: 10px;
      box-sizing: border-box;

      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  }

  .btns {
    text-align: center;

    .cancel {
      border: 3px solid #75594e;
      color: #75594e;
      background-color: #fff8e2;
      padding: 10px 20px;
      border-radius: 18px;
      margin-left: 10px;
      box-sizing: border-box;
      font-size: 16px;

      cursor: pointer;
      text-transform: none;
    }

    .submit {
      border: 3px solid #75594e;
      color: white;
      background-color: #75594e;
      padding: 10px 20px;
      border-radius: 18px;
      margin-left: 10px;
      box-sizing: border-box;
      font-size: 16px;

      cursor: pointer;
      text-transform: none;
    }
  }
`;
