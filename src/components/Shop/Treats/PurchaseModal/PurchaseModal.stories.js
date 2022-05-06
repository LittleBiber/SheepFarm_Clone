import React from "react";
import PurchaseModal from "./index";

export default {
  component: PurchaseModal,
  title: "PurchaseModal",
};

const Template = (args) => <PurchaseModal {...args} />;

export const Default = Template.bind({});
Default.args = { on: true, item_name: "Bitter Bon Bon", price: 0.025, unit: 1 };
