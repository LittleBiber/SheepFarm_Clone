import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #75594e;

  position: relative;

  @media (max-width: 1100px) {
    position: relative;
    ${({ section }) => section && "top: 80px;"}
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 0 50px 0;
    font-size: 13px;

    img {
      width: 250px;
      margin-bottom: 20px;
      vertical-align: center;
    }

    a {
      text-decoration-color: #ffffff;
    }

    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 0.03em;
      color: #f9f4f1;
      text-align: center;
    }

    @media (max-width: 580px) {
      padding: 15px 0;

      img {
        max-width: 188px;
        max-height: 60px;
        margin-bottom: 15px;
      }
    }
  }

  .error-report-container {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;

    .btn-error-report {
      border: 0;
      color: #b09184;
      background-color: transparent;
      border-radius: 20px;
      padding: 10px;
      font-size: 12px;
    }
  }
`;
