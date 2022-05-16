import React from "react";
import WelcomeModal from "./index";

export default {
  component: WelcomeModal,
  title: "WelcomeModal",
};

const Template = (args) => <WelcomeModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
