import styled from "styled-components";

export const Main = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  border: 5px solid ${({ border }) => border};

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 28px;
  border-radius: 35px;
  box-sizing: border-box;
  box-shadow: 0px 15px 21px #e8dcb5;
  z-index: 1;

  @media (max-width: 1000px) {
    position: relative;
    left: 50%;
    transform: translateX(-155px);
  }

  img {
    border-radius: 35px;
    margin-bottom: 22px;

    @media (max-width: 1000px) {
      width: 250px;
    }
  }

  .box_title {
    color: ${({ color }) => color};
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
  }

  .box_desc {
    color: ${({ color }) => color};
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;
