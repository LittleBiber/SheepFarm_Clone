import styled from "styled-components";

export const MobileMenuBar = styled.div`
  background-color: ${({ open, bgcolor }) => (open ? "#543F36" : bgcolor)};
  width: 100%;
  height: 80px;
  position: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 9999;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  .button-top {
    border: none;
    outline: none;
    background-color: transparent;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .logo {
    @media (max-width: 1100px) {
      padding: 5px 0;
      width: 104px;
    }
  }

  .shared {
    background-image: url(/MobileHeader/${({ open, bgcolor }) =>
      bgcolor === "#543F36" || open ? "shared_sub.svg" : "shared.svg"});
  }

  .menu {
    background-image: url(/MobileHeader/${({ open, bgcolor }) => {
      if (bgcolor === "#543F36" && !open) return "hamburger_sub.svg";
      else if (bgcolor !== "#543F36" && !open) return "hamburger.svg";
      else if (bgcolor === "#543F36" && open) return "icon-menu-close_sub.svg";
      else return "icon-menu-close_sub.svg";

      // return open ? "icon-menu-close_sub.svg" : "hamburger.svg";
    }});
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  ${({ open }) => !open && "display: none"};

  position: fixed;
  z-index: 9999;
  top: 80px;
  left: 0;
  width: 100%;
  height: var(--measure-height, calc(100vh - 80px));
  background-color: rgba(84, 63, 54, 0.9);

  .mobile-menu {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    height: 100%;
    font-size: 22px;
    font-weight: bold;
    line-height: 48px;
    transition: opacity 0.3s;

    .wallet {
      display: flex;
      align-items: center;
      padding: 14px 50px;
      border-radius: 50px;

      cursor: pointer;
      margin-top: 20px;
      border: 2px solid rgba(255, 248, 226, 0.5);
      background-color: rgba(0, 0, 0, 0.1);

      img {
        width: 35px;
      }

      span {
        font-size: 18px;
        line-height: 27px;
        padding: 0 20px;
        color: #fff8e2;

        display: flex;
        align-items: center;
        border-radius: 50px;
      }
    }
  }

  .display-hide {
    opacity: 0 !important;
    z-index: 0 !important;
    height: 0 !important;
    pointer-events: none;
  }
`;

export const Link = styled.a`
  padding: 10px 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${({ value }) =>
    window.location.href.split("/").reverse()[0] === value
      ? "#ffc107"
      : "#fff8e2"};

  :hover {
    color: #ffc107;
  }
`;

export const MobileWallet = styled.div`
  ${({ walletBox }) =>
    walletBox
      ? "transform: translate(0%, 0%); opacity: 1;"
      : "transform: translate(100%, 0%); opacity: 0;"}

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  transition: all 0.2s;

  .wallet-title {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    line-height: 48px;
    color: #fcfcfc;
  }

  .wallet-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s;

    button:not(:last-child) {
      margin-bottom: 15px;
    }

    .wallet-btn {
      border: 8px solid rgba(62, 42, 24, 0.95);
      color: black;
      font-size: 16px;
      line-height: 27px;
      padding: 0px 30px;
      width: 100%;
      height: 45px;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-familiy: "Poppins";
      font-weight: 500;

      img {
        width: 30px;
        margin-right: 10px;
      }
    }

    #metamask-btn {
      background-color: #fcfcfc;
    }

    #klip-btn {
      background-color: #fae64d;
    }

    .disconnect-btn {
      font-weight: 500;
      margin-top: 10px;
      background-color: #fcfcfc;
      width: 150px;
      height: 50px;
      border-radius: 10px;
      font-size: 14px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
