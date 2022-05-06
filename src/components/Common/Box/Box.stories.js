import React from "react";
import Box from "./index";

export default {
  component: Box,
  title: "Box",
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "PvP Content",
  desc: "Players can compete against each other by entering tournaments. Rarer sheep will have a better chance of taking home the prize. Some players might prefer to bet on the sheep of other players rather than entering the contest themselves.",
  img: "/Features/competition.png",
  bgcolor: "#B093AC",
  color: "#624D7E",
  border: "#7D679C",
};
