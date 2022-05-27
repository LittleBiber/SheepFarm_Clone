import styled from "styled-components";

export const MorphingHelp = styled.div`
  margin-top: 60px;
  border-top: 1px solid rgba(117, 89, 78, 0.5);
  padding-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    padding: 4.54545vw;
  }

  @media (max-width: 720px) {
    padding: 4.6729vw 3.03738vw;
  }

  dl {
    margin: 0;

    dt {
      color: #6f5246;
      margin-bottom: 5px;
      font-weight: 700;
      letter-spacing: -0.015em;
      font-size: 24px;
      line-height: 36px;

      @media (max-width: 1100px) {
        font-size: 2.18182vw;
        line-height: 3.27273vw;
      }

      @media (max-width: 720px) {
        font-size: 3.27103vw;
        line-height: 4.90654vw;
        margin-bottom: 2.57009vw;
      }
    }

    dd {
      position: relative;
      color: #6f5246;

      font-weight: 400;
      letter-spacing: 0.05em;
      font-size: 20px;
      line-height: 25px;

      @media (max-width: 1100px) {
        font-size: 1.81818vw;
        line-height: 2.27273vw;
      }

      @media (max-width: 720px) {
        margin-left: 0;
        font-size: 3.27103vw;
        line-height: 4.90654vw;
      }
    }
  }
`;

export const MorphLog = styled.div`
  margin-top: 90px;

  @media (max-width: 720px) {
    margin-top: 50px;
  }

  dl {
    margin: 0;

    dt {
      margin-bottom: 10px;
      text-align: center;

      font-weight: 700;

      img {
        width: 340px;

        @media (max-width: 720px) {
          width: 245px;
        }
      }
    }

    dd {
      text-align: center;
      margin: 0;
      font-size: 32px;
      line-height: 56px;
      color: #6f5246;
      font-weight: 800;

      @media (max-width: 720px) {
        margin-bottom: 25px;
        font-size: 20px;
        line-height: 56px;
      }
    }
  }
`;
