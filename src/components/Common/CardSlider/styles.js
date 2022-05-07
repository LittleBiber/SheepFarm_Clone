import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  // filter: brightness(80%);
  opacity: 0.8;
  color: ${({ color }) => color};

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 580px) {
    position: relative;
    top: ${({ top }) => top}px;
    transform: scale(0.5);
  }

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
    background-color: #decc92;
  }

  .side-active {
    color: ${({ active_color }) => active_color};
  }

  .selection-active {
    background: ${({ active_color }) => active_color};
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
