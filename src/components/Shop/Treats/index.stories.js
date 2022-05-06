import React from "react";

import Treats from "./index";

export default {
  component: Treats,
  title: "Treats",
};

const Template = (args) => <Treats {...args} />;

export const Default = Template.bind({});
Default.args = {};
