import React from "react";
import Question from "../../Common/Question/Question";
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
            <Question {...one} idx={idx + 1} key={idx} />
          ))}
        </ul>
      </div>
      <img className="bottom_left" src="/Question/faq-bg1.png" alt="bg1" />
      <img className="bottom_right" src="/Question/faq-bg2.png" alt="bg2" />
    </Main>
  );
}

/*
이틀짜리 고민 해결: 요소를 문장 안에 넣어줄거면 그냥 배열로 주면 된다;

position: absolute로 고정한 이미지의 위치를 div안에서 조정하려면 relative로 잡아야 "상대적" 위치 조정이 가능
*/
