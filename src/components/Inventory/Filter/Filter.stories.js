import React from "react";
import Filter from "./index";

export default {
  component: Filter,
  title: "Filter",
};

const Template = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {};
