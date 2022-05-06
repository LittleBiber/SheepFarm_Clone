import React from "react";
import Selector from "./index";

export default {
  component: Selector,
  title: "Selector",
};

const Template = (args) => <Selector {...args} />;

export const Default = Template.bind({});
Default.args = {};
