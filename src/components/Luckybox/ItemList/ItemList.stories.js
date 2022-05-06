import React from "react";
import ItemList from "./index";

export default {
  component: ItemList,
  title: "ItemList",
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {};
