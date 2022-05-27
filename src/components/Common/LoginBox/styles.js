import styled from "styled-components";

const BOX_VALUES = {
  normal: `  
    background-color: #ffffff;
    padding: 55px;
    border: 2px solid #6f5246;
    border-radius: 8px;

    button:not(:last-child) {
      margin-bottom: 15px;
    }

    @media (max-width: 720px){
      display: inline-block;
      width: 70.09346vw;
    }
  `,
  big: `
    width: 100%;
    background-color: #FFFFFF;
    padding: 55px;
    border: 2px solid #6F5246;
    border-radius: 8px;

    button:not(:last-child) {
      margin-bottom: 20px;
    }

    @media (max-width: 720px ){
      display: inline-block;
      width: 306px;
    }
  `,
  no_background: `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 40px;
    max-width: 640px;
    margin: 10vh auto 0;

    .wallet-button-box {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,
};

export const Main = styled.div`
  ${({ type }) => BOX_VALUES[type]};
`;

const BUTTON_VALUES = {
  normal: `
    cursor: pointer;

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
    }
  `,
  big: `
    cursor: pointer;

    font-size: 16px;
    line-height: 27px;
    padding: 35px 30px;
    font-weight: 500;
    width: 100%;
    height: 45px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 720px) {
      padding-top: 0px;
    padding-bottom: 0px;
    }

    img {
      width: 30px;
      margin-right: 10px;

      @media (max-width: 720px) {
        width: 20px;
      }
    }
  `,
  no_background: `
    font-size: 16px;
    line-height: 27px;
    padding: 19px 0px;
    font-weight: 500;
    width: 100%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media(max-width: 580px) {
      font-weight: 400;
      padding: 10px 20px;
    }

    img {
      width: 35px;
      margin-right: 10px;
    }
  `,
};

export const WalletButton = styled.button`
  background-color: ${({ bgcolor }) => bgcolor};

  border: ${({ type }) => (type === "normal" ? 2 : 1)}px solid;
  border-color: ${({ border }) => border};

  color: ${({ color }) => color};

  ${({ type }) => BUTTON_VALUES[type]}

  span {
    font-size: 16px;
    line-height: 27px;
    font-weight: 500;
    letter-spacing: 0px;

    @media (max-width: 720px) {
      ${({ type }) => (type === "big" ? `font-size: 13px` : `font-size: 16px`)};
    }
  }
`;
