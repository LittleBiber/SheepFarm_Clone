import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 46px;
  gap: 10px;

  box-sizing: border-box;

  @media (max-width: 1000px) {
    justify-content: center;
    padding: 0 35px;
  }

  span {
    cursor: pointer;
    text-align: center;
    font-weight: 800;
    color: #6f5246;
    padding: 15px 30px;
    border: 2px solid #e3d8c4;
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 0.05em;
    display: flex;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 21px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }

    @media (max-width: 580px) {
      padding: 12px 20px;
      font-size: 14px;
      line-height: 21px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
  }

  .active {
    background-color: #ffec9e;
    border: 2px solid #ecc66a;
  }
`;
