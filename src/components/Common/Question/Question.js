import React from "react";
import { Main } from "./styles";

export default function Question({ idx, question, answer }) {
  return (
    <Main>
      <div className="question_num">{idx < 10 ? `0${idx}.` : `${idx}.`}</div>
      <div className="question_text">
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
      </div>
    </Main>
  );
}
