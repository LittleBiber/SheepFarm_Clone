import React from "react";
import Sidebar from "./index";

export default {
  component: Sidebar,
  title: "Sidebar",
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
