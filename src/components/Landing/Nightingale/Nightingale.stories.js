import React from "react";

import Nightingale from "./index";

export default {
  component: Nightingale,
  title: "Nightingale",
};

const Template = (args) => <Nightingale {...args} />;

export const Default = Template.bind({});
Default.args = {};
