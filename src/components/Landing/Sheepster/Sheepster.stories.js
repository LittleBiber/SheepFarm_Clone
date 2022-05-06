import React from "react";
import Sheepster from "./index";

export default {
  component: Sheepster,
  title: "Sheepster",
};

const Template = (args) => <Sheepster {...args} />;

export const Default = Template.bind({});
Default.args = {};
