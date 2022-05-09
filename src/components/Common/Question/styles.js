import styled from "styled-components";

export const Main = styled.li`
  flex: 1;
  min-width: 500px;
  display: flex;
  background: #fffef7;
  border: 2px solid #3f2d1c;
  border-radius: 25px;
  padding: 25px;

  @media (max-width: 580px) {
    min-width: 350px !important;
    padding: 20px;
  }

  .question_num {
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    margin-right: 15px;
    letter-spacing: 0.05em;
    color: #87725d;
  }

  .question_text {
    letter-spacing: 0.05em;
    color: #87725d;
  }

  .question {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }

  .answer {
    color: #dbae85;
    letter-spacing: 0.08em;
    line-height: 24px;

    @media (max-width: 580px) {
      font-size: 14px;
    }
  }

  a {
    letter-spacing: 0.05em;
    color: #87725d;
  }
`;
