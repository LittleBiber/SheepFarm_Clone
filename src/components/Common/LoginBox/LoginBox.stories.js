import React from "react";

import LoginBox from "./index";

export default {
  component: LoginBox,
  title: "LoginBox",
};

const Template = (args) => <LoginBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
