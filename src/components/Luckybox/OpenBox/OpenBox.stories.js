import React from "react";
import OpenBox from "./index";

export default {
  component: OpenBox,
  title: "OpenBox",
};

const Template = (args) => <OpenBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
