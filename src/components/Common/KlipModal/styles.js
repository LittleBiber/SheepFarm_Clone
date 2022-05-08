import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins";
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;

  .modal-container {
    width: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 40px 50px 50px;
    transform: translate(-50%, -50%);
    background-color: #f7d621;
    border-radius: 3px;

    @media (max-width: 580px) {
      width: 300px;
    }

    .ic-close {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .modal-title {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;

      img {
        margin-right: 10px;
      }

      @media (max-width: 580px) {
        font-size: 12px;
      }
    }

    #klip-qr-code {
      margin: 20px 0;
    }

    .modal-warning {
      width: 200px;
      font-size: 14px;
      text-align: center;
    }
  }

  .hidden {
    display: none;
  }
`;
