import React from "react";
import { Question } from "../../Common";
import { Pin } from "../../../styles";
import { Main, QuestionTitle } from "./styles";
import { DATA_LIST } from "./dummy";

export default function Faq() {
  return (
    <Main>
      <div className="page-container">
        <div className="pin_wrapper">
          <Pin>FAQ</Pin>
        </div>
        <QuestionTitle>STILL DON'T UNDERSTAND?</QuestionTitle>
        <ul className="question_list">
          {DATA_LIST.map((one, idx) => (
            <Question options={one} idx={idx + 1} key={idx} />
          ))}
        </ul>
      </div>
      <img className="bottom_left" src="/Question/faq-bg1.png" alt="bg1" />
      <img className="bottom_right" src="/Question/faq-bg2.png" alt="bg2" />
    </Main>
  );
}
