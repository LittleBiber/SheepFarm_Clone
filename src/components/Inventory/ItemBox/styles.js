import styled from "styled-components";

export const ItemList = styled.div`
  // max-width: 1300px;
  // width: 100vw;
  // overflow: hidden;
  // padding-top: 80px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  @media (max-width: 720px) {
    padding-top: 0;
  }

  overflow: hidden;
  padding-top: 80px;

  display: flex;
  justify-content: center;

  dl {
    text-align: center;
    width: 860px; // 왜 이거 내쪽에서만 오류 나지?

    @media (max-width: 1000px) {
      width: 100%;
    }

    dt {
      margin-bottom: 85px;

      @media (max-width: 720px) {
        margin-bottom: 30px;
      }
    }

    dd {
      position: relative;
      margin-top: -1px;

      // position: relative;
      // margin-top: -1px;
      // margin-bottom: 0.5rem;
      // margin-left: 0;

      // display: flex;
      // justify-content: center;

      .message-text {
        font-size: 50px;
        font-weight: 900;
        line-height: 75px;

        font-family: "Poppins";
        font-weight: 900;
        width: 100%;
        height: 100%;
        color: #44362a;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;

        @media (max-width: 720px) {
          font-size: 5.60748vw;
          line-height: 8.17757vw;
        }

        // width: 100%;
        // height: 100%;
        // color: #44362a;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // letter-spacing: 2px;

        // font-size: 50px;
        // font-weight: 900;
        // line-height: 75px;

        // font-family: "Poppins";

        // @media (max-width: 720px) {
        //   font-size: 5.60748vw;
        //   line-height: 8.17757vw;
        // }
      }
    }
  }

  .img-messages {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 630px;
      display: none;
    }

    .on {
      display: inline-block;

      @media (max-width: 720px) {
        width: 300px;
      }
    }
  }

  .item_list {
    @media (max-width: 720px) {
      padding-top: 80px;
      padding-bottom: 120px;
    }
  }
`;

export const ProductList = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: block;
    padding-top: 80px;
    padding-bottom: 120px;
  }
`;

export const SelectAll = styled.div`
  // width: 100%;
  // display: flex;
  // justify-content: flex-end;
  // align-items: center;
  // margin-bottom: 23px;

  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 23px;

  @media (max-width: 1100px) {
    margin-top: 75px;
  }

  @media (max-width: 720px) {
    padding-right: 8.64486vw;
    margin-top: 7.00935vw;
    margin-bottom: -5.84112vw;
  }

  .cx-wrapper {
    width: 55px;
    height: 55px;

    @media (max-width: 720px) {
      width: 30px;
      height: 30px;
    }

    label {
      width: 55px;
      height: 55px;
      position: absolute;
      z-index: 10;

      @media (max-width: 720px) {
        width: 30px;
        height: 30px;
      }
    }

    .selectall-checkbox {
      width: 55px;
      height: 55px;

      img {
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
      }

      .hidden {
        display: none;
      }
    }

    #select-all {
      display: none;
    }
  }

  .selectall-text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.05em;
    color: #6f5246;
    margin: 0 15px;

    @media (max-width: 720px) {
      font-size: 3.27103vw;
      margin-right: 0;
    }
  }
`;
