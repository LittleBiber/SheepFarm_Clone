import React from "react";

import NFTMarket from "./index";

export default {
  component: NFTMarket,
  title: "NFTMarket",
};

const Template = (args) => <NFTMarket {...args} />;

export const Default = Template.bind({});
Default.args = {};
