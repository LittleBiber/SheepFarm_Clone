import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 46px;
  gap: 10px;

  @media (max-width: 720px) {
    margin-top: 28px;
    padding-left: 7.71028vw;
    gap: 2.33645vw;
    padding: 2.80374vw 4.6729vw;
  }

  div {
    font-weight: 800;
    color: #6f5246;
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 30px;
    border: 2px solid #e3d8c4;
    text-decoration: none;

    @media (max-width: 720px) {
      border: 2px solid #ecc66a;
    }
  }

  .active {
    background-color: #ffec9e;
    border: 2px solid #ecc66a;
  }
`;
