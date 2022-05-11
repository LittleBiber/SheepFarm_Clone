import React from "react";
import Pastures from "./index";

export default {
  component: Pastures,
  title: "Pastures",
};

const Template = (args) => <Pastures {...args} />;

export const Default = Template.bind({});
Default.args = {
  SectorData: [{ id: 2650 }, {}, {}],
  selected: 0,
  handleSelected: () => alert("!"),
};
