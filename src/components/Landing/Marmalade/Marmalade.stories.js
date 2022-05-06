import React from "react";

import Marmalade from "./index";

export default {
  component: Marmalade,
  title: "Marmalade",
};

const Template = (args) => <Marmalade {...args} />;

export const Default = Template.bind({});
Default.args = {};
