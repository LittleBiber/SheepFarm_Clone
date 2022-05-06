import React from "react";
import Trailer from "./index";

export default {
  component: Trailer,
  title: "Trailer",
};

const Template = (args) => <Trailer {...args} />;

export const Default = Template.bind({});
Default.args = {};
