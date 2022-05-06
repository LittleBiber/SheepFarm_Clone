import styled from "styled-components";

export const Main = styled.div`
  justify-content: center;
  align-items: center;
  padding: 44px 0 119px;

  @media (max-width: 720px) {
    padding-top: 100px;
  }

  .wallet-button-box {
    background-position: center;
    background-size: cover;
    width: 550px;
    height: 490px;
    padding: 27px 45px 0px;

    @media (max-width: 720px) {
      width: 358px;
      height: 274px;
      padding: 15px 0 0;
      text-align: center;
    }

    .wallet-button-wrapper {
      align-items: center;
      max-width: 550px;

      @media (max-width: 720px) {
        display: inline-block;
        width: 306px;
      }

      .btns {
        background-color: #ffffff;
        padding: 55px;
        border: 2px solid #6f5246;
        border-radius: 8px;

        top: 0px;
        width: 100%;

        img {
          width: 30px;
          margin-right: 10px;
        }

        button:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;

export const WalletButton = styled.button`
  background-color: ${({ bgcolor }) => bgcolor};

  border-width: 2px;
  border-color: ${({ border }) => border};

  color: ${({ color }) => color};
  cursor: pointer;
  margin: 0;

  padding-top: 35px;
  padding-bottom: 35px;

  font-size: 16px;
  line-height: 27px;
  font-weight: 500;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    margin-right: 10px;
    vertical-align: middle;
  }

  @media (max-width: 720px) {
    padding-top: 0px;
    padding-bottom: 0px;

    img {
      width: 20px;
    }

    span {
      font-size: 13px;
    }
  }
`;
