import React from "react";

import MetamaskLogin from "./index";

export default {
  component: MetamaskLogin,
  title: "MetamaskLogin",
};

const Template = (args) => <MetamaskLogin {...args} />;

export const Default = Template.bind({});
Default.args = { modal: true };
