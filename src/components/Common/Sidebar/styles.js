import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  right: 20px;
  bottom: 130px;
  transition: top 0.2s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px 20px 5px 0;
  z-index: 2000;

  img {
    width: 50px;
    margin: 10px 5px;
    display: block;

    vertical-align: middle;
  }

  .share {
    cursor: pointer;
    @media (max-width: 1100px) {
      display: none;
    }
  }

  @media screen and (max-width: 1100px) {
    position: fixed;
    top: unset;
    transition: unset;
    bottom: 20px;
    right: 0;
    display: flex;
    justify-content: space-around;

    a:nth-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 1000px) {
    z-index: 2000;

    img {
      width: 35px;
      margin: 10px 5px;
      display: block;
    }
  }
`;
