import styled from "styled-components";

export const Main = styled.div`
  background-color: ${({ bgcolor }) => bgcolor} !important; // 페이지별 배경색
  width: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }

  .hidden {
    opacity: 0 !important;
    z-index: 0 !important;
    height: 0 !important;
    pointer-events: none;
  }

  .menu {
    width: 1300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;

    .menu_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .logo {
      width: 116px;
      margin-right: 20px;
    }

    .options {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .login_box {
      display: flex;
      justify-content: center;
      align-items: center;

      .play-btn {
        position: relative;
        margin-right: 20px;
        cursor: pointer;
        width: 151px;
        height: 48px;
        background: linear-gradient(0deg, #ff7f22, #ff7f22), rgba(0, 0, 0, 0.1);
        border-radius: 80px;

        :hover {
          background: #d06517;
        }

        span {
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          line-height: 27px;
          font-weight: 700;
          color: #fff;
        }
      }

      #walletbox {
        display: none;
      }

      .wallet_web {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        padding: 8px 20px;
        background-color: rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.7);
        box-sizing: border-box;
        border-radius: 100px;

        .wallet-list {
          margin-right: 9px;
          width: 24px;
          vertical-align: middle;
        }

        .wallet-kaikas,
        .wallet-klip,
        .wallet-matamask,
        .wallet-signout {
          margin-right: 9px;
        }

        .wallet-signout {
          display: none;
        }

        :hover {
          .wallet-kaikas,
          .wallet-klip,
          .wallet-matamask {
            display: none;
          }

          .wallet-signout {
            display: ${({ userID }) => userID && "block"};
          }
        }

        .wallet-text {
          display: inline-block;
          font-size: 14px;
          line-height: 21px;
          font-weight: 700;
          color: #ffffff;
          position: relative;
          top: 2px;
        }
      }
    }

    #wallet-button-wrapper {
      position: absolute;
      top: 90px;
      right: 0;
      align-items: center;
      transition: all 0.2s;

      .btns {
        background-color: #f5e7aa;
        padding: 20px;
        border: 4px solid #6f5246;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.2s;

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

export const Link = styled.a`
  padding: 27px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  color: ${({ value }) =>
    window.location.href.split("/").reverse()[0] === value
      ? "#ffc107"
      : "white"};

  :hover {
    text-decoration: underline;
  }
`;

export const WalletButton = styled.button`
  background-color: ${({ bgcolor }) => bgcolor};

  border-width: 2px;
  border-color: ${({ border }) => border};

  color: ${({ color }) => color};
  cursor: pointer;
  margin: 0;

  font-size: 16px;
  line-height: 27px;
  padding: 0px 30px;
  font-weight: 500;
  width: 100%;
  height: 45px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;
