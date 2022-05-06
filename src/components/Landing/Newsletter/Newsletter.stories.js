import React from "react";
import Newsletter from "./index";

export default {
  component: Newsletter,
  title: "Newsletter",
};

const Template = (args) => <Newsletter {...args} />;

export const Default = Template.bind({});
Default.args = {};
