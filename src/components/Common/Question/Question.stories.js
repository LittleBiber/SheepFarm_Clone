import React from "react";
import Question from "./Question";

export default {
  component: Question,
  title: "Question",
};

const Template = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = { idx: 1, question: "Question", answer: "Answer" };
