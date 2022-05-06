import React from "react";
import SheepSelector from "./index";

export default {
  component: SheepSelector,
  title: "SheepSelector",
};

const Template = (args) => <SheepSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};
