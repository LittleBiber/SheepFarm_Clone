import React from "react";
import CardSlider from "./index";

export default {
  component: CardSlider,
  title: "CardSlider",
};

const Template = (args) => <CardSlider {...args} />;

let now = 0;
const update = (value) => {
  console.log(value);
  now = value;
};

export const Default = Template.bind({});
Default.args = {
  count: 4,
  active_color: "#3E2A18",
  color: "#EADEB9",
  now: now,
  update: update,
};
