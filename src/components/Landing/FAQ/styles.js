import styled from "styled-components";
import { Title } from "../../../styles";

export const Main = styled.div`
  background-color: #f9f4f1;
  position: relative;

  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .page-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 200px;

    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    @media (max-width: 1100px) {
      padding: 150px 50px 200px 50px;
      box-sizing: border-box;
    }

    @media (max-width: 580px) {
      padding-top: 50px;
      padding-bottom: 100px;
    }
  }

  .question_list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .bottom_left {
    position: absolute;
    left: 20px;
    width: 34vw;
    bottom: -5vw;

    pointer-events: none;
    z-index: 0;
  }

  .bottom_right {
    position: absolute;
    right: 0;
    width: 22vw;
    bottom: -5vw;

    pointer-events: none;
    z-index: 0;
  }
`;

export const QuestionTitle = styled(Title)`
  font-weight: bold;
  font-size: 47px;
  line-height: 66px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #3f2d1c;
  text-shadow: 6px 6px 5px rgb(233 211 169 / 50%);
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin-top: 0;
  }

  @media (max-width: 580px) {
    font-size: 28px !important;
    line-height: 40px !important;
    margin-top: 0;
  }
`;
