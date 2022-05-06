import React from "react";

import KlipModal from "./index";

export default {
  component: KlipModal,
  title: "KlipModal",
};

const Template = (args) => <KlipModal {...args} />;

export const Default = Template.bind({});
Default.args = { modal: true };
