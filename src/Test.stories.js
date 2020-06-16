import React from "react";
import Test from "./Test";

export default {
  title: "Test",
  component: Test,
};

import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";

storiesOf("Test", module).add("foo", () => <Test />);
