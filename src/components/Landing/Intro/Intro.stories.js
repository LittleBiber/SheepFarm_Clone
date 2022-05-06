import React from "react";
import Intro from "./index";

export default {
  component: Intro,
  title: "Intro",
};

const Template = (args) => <Intro {...args} />;

export const Default = Template.bind({});
Default.args = {};
