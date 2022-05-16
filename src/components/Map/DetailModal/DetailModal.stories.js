import React from "react";
import DetailModal from "./index";

export default {
  component: DetailModal,
  title: "DetailModal",
};

const Template = (args) => <DetailModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1013,
  size: "5X5",
  sheepLimit: 3,
  sold: true,
  open: false,
  ownerId: "0xf28191e65F145dd5CffF98cfe8792501a11074cB",
  setModal: () => alert("창 닫기"),
};
