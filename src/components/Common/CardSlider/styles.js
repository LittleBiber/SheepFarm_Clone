import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  filter: brightness(80%);
  opacity: 0.8;

  color: #fff8e2;

  .left-side {
    width: 0px;
    height: 0px;
    border-top: 16px solid transparent;
    border-right: 27px solid;
    border-bottom: 16px solid transparent;
    cursor: pointer;
  }

  .right-side {
    width: 0px;
    height: 0px;
    border-top: 16px solid transparent;
    border-left: 27px solid;
    border-bottom: 16px solid transparent;
    cursor: pointer;
  }

  .selection {
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin: 0 20px;
    cursor: pointer;
    background-color: #fff8e2;
  }

  .side-active {
    color: #3e2a18;
  }

  .selection-active {
    background: #3e2a18;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
