import React from "react";

import Upgrades from "./index";

export default {
  component: Upgrades,
  title: "Upgrades",
};

const Template = (args) => <Upgrades {...args} />;

export const Default = Template.bind({});
Default.args = {};
