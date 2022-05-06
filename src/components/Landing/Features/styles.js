import styled from "styled-components";

export const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap");
  background: #fff8e2;
  position: relative;
  padding: 70px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .feature_title {
    font-family: Arvo;
    font-weight: bold;
    font-size: 47px;
    line-height: 66px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #75594e;
    padding-bottom: 30px;
  }

  .side_image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
    z-index: 1;
  }

  .box_wrapper {
    position: relative;
    transform: scale(0.9);
  }

  .boxes {
    transform: translateX(0px);
    display: flex;
    gap: 20px;
    transition: all 0.5s;

    @media (max-width: 1000px) {
      transform: translateX(${({ offset }) => offset}px); // -404 씩 올려주면 됨
      position: relative;
      padding-bottom: 30px;
      gap: 140px;
    }
  }

  input[type="radio"] {
    display: hidden;
  }
`;
