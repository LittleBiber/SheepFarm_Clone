import React from "react";
import Item from "./index";

export default {
  component: Item,
  title: "Item",
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {};
