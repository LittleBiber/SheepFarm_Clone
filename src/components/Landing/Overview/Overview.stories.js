import React from "react";

import Overview from "./index";

export default {
  component: Overview,
  title: "Overview",
};

const Template = (args) => <Overview {...args} />;

export const Default = Template.bind({});
Default.args = {};
