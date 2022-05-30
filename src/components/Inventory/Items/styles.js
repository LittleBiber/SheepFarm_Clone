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

  @media (max-width: 720px) {
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 30px;
  }
`;

export const ItemTable = styled.div`
  .comp-sign-in {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 44px 0 119px;

    @media (max-width: 720px) {
      padding-top: 100px;
    }

    .comp-sign-in--bx {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 640px;
      height: 490px;
      padding: 27px 45px 0px;

      @media (max-width: 720px) {
        width: 358px;
        height: 274px;
        padding: 15px 0 0;
        text-align: center;
      }

      .wallet-btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;

        @media (max-width: 720px) {
          display: inline-block;
          width: 306px;
        }
      }
    }
  }
`;
