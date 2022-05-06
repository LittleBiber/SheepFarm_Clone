import React from "react";

import Faq from "./index";

export default {
  component: Faq,
  title: "Faq",
};

const Template = (args) => <Faq {...args} />;

export const Default = Template.bind({});
Default.args = {};
