import styled from "styled-components";

export const Main = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  margin-left: -37px;
  margin-top: -37px;
  flex-wrap: wrap;

  li {
    margin-left: 37px;
    margin-top: 37px;
    list-style: none;
  }

  @media (max-width: 1440px) {
    width: 100%;
    justify-content: flex-start;
    margin-left: 0;
    margin-top: 0;
    gap: 2.08333vw;

    li {
      margin-left: 0;
      margin-top: 0;
    }
  }

  @media (max-width: 720px) {
    display: block;
    margin-top: 0;

    li {
      margin-top: 0;
      margin-bottom: 47px;
    }
  }
`;
