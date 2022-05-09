import styled from "styled-components";

export const Main = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 420px;

  @media (max-width: 1000px) {
    position: relative;
    left: 50%;
  }

  img {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    max-width: 140px;
    border-radius: 50%;
    border: 5px solid;
    border-color: ${({ imgborder }) => imgborder};
  }

  .ibox_desc {
    background-color: ${({ background }) => background};
    border: 5px solid; // 오늘 안 사실: 둘을 분리할거면 border를 먼저 지정하고 색상 지정을 해줘야 함
    border-color: ${({ boxborder }) => boxborder};
    box-shadow: 0px 22px 20px ${({ shadow }) => shadow};

    width: 100%;
    height: 100%;
    position: relative;
    top: 66.5px;
    z-index: 0;

    box-sizing: border-box;
    border-radius: 25px;
    padding: 90px 20px 56px;

    display: flex;
    flex-direction: column;
    justify-contents: center;

    .ibox_title {
      font-size: 20px;
      line-height: 45px;
      text-align: center;
      letter-spacing: 0;
      color: ${({ color }) => color};
      padding-bottom: 25px;

      font-weight: 900;
      letter-spacing: 0.03em;
      color: #6f5246;
    }

    .token-desc {
      font-weight: 500;
      font-size: 20px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 0.03em;
      color: ${({ color }) => color};

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.03em;
      }
    }

    @media (max-width: 1000px) {
      width: 300px;
      padding-bottom: 30px;
      margin-bottom: 20px;
    }
  }
`;
