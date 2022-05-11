import React from "react";
import Canvas from "./index";

export default {
  component: Canvas,
  title: "Canvas",
};

const Template = (args) => <Canvas {...args} />;

export const Default = Template.bind({});
Default.args = {};
