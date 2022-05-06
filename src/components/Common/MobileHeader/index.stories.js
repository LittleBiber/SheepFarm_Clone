import React from "react";
import MobileHeader from "./index";

export default {
  component: MobileHeader,
  title: "MobileHeader",
};

const Template = (args) => <MobileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
