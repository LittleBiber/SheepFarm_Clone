import React from "react";

import Features from "./index";

export default {
  component: Features,
  title: "Features",
};

const Template = (args) => <Features {...args} />;

export const Default = Template.bind({});
Default.args = {};
