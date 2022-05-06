import React from "react";

import ImageBox from "./index";

export default {
  component: ImageBox,
  title: "ImageBox",
};

const Template = (args) => <ImageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgborder: "#6f5246",
  boxborder: "#ecc66a",
  background: "#ffec9e",
  shadow: "#e8dcb5",
  color: "#6f5246",
  image: "/Token_Nft/harvest.png",
  title: "Title",
  desc: "Description",
};
