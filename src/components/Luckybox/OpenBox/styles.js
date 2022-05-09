import styled from "styled-components";
import LoginBox from "../../Common/LoginBox";

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  #noitem {
    width: 500px;
    vertical-align: middle;
  }

  .no-box-text {
    position: relative;
    top: calc(50% - 46px);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6f5246;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.05em;

    img {
      position: relative;
      width: 700px;
    }

    div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 44px;
      line-height: 56px;
      font-weight: 900;
      letter-spacing: 0.05em;
    }
  }

  @media (max-width: 768px) {
    #noitem {
      width: 450px;
    }

    .no-box-text {
      img {
        width: 600px;
      }

      div {
        font-size: 26px;
        line-height: 36px;
      }
    }
  }

  @media (max-width: 580px) {
    #noitem {
      width: 350px;
    }

    .no-box-text {
      img {
        width: 500px;
      }

      div {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
`;

export const SectionLoginBox = styled(LoginBox)`
  display: none;
`;
