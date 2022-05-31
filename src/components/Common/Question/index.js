import React from "react";
import { Main } from "./styles";

export default function Question({ options, idx }) {
  const { question, answer } = options;
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
