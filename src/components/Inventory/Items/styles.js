import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  background-color: #fff8e2;
  padding: 75px 65px 197px 70px;

  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 1440px) {
    padding-right: 4.51389vw;
    padding-left: 4.86111vw;
  }

  @media (max-width: 1100px) {
    padding-top: 0;
  }
`;

export const ItemTable = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 1300px;
  // min-height: 100vh;

  // padding: 75px 70px 197px;

  // @media (max-width: 720px) {
  //   padding: 0;
  // }

  .comp-sign-in {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 44px 0 119px;

    .comp-sign-in--bx {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 640px;
      height: 490px;
      padding: 27px 45px 0px;

      .wallet-btns {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
      }
    }
  }
`;
