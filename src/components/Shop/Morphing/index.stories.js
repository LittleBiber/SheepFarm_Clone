import React from "react";

import Morphing from "./index";

export default {
  component: Morphing,
  title: "Morphing",
};

const Template = (args) => <Morphing {...args} />;

export const Default = Template.bind({});
Default.args = {};
