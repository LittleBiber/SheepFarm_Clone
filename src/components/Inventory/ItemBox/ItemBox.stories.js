import React from "react";
import ItemBox from "./index";

export default {
  component: ItemBox,
  title: "ItemBox",
};

const Template = (args) => <ItemBox {...args} />;

export const Default = Template.bind({});
Default.args = { items: [] };
