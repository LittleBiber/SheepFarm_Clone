import React from "react";
import Items from "./index";

export default {
  component: Items,
  title: "Items",
};

const Template = (args) => <Items {...args} />;

export const Default = Template.bind({});
Default.args = {};
