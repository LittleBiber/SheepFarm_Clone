import styled from "styled-components";

export const Main = styled.div`
  background-color: #fff8e2;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ItemTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1300px;
  min-height: 100vh;

  padding: 75px 70px 197px;

  @media (max-width: 720px) {
    padding: 0;
  }
`;
