import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  column-gap: 46px;
  row-gap: 46px;
  padding: 0;
  margin: 0;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 1000px) {
    padding: 0 35px;
  }

  @media (max-width: 750px) {
    padding: 0 120px;
  }

  @media (max-width: 580px) {
    padding: 0 80px !important;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 470px) {
    padding: 0 40px !important;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
