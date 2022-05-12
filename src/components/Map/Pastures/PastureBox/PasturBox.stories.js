import React from "react";
import PastureBox from "./index";

export default {
  component: PastureBox,
  title: "PastureBox",
};

const Template = (args) => <PastureBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
    sold: false
};
