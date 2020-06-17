import React from "react";
import { storiesOf } from "@storybook/react-native";
import Card from "./Card";

storiesOf("Card", module)
  .add("with image", () => (
    <Card
      caption="A Rare Phenomenon"
      imageSrc="https://images.unsplash.com/photo-1467934466021-f2425d752934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022241431650d3ce7fbffb73431a065a&auto=format&fit=crop&w=400&q=60"
      username="bsoropia"
    />
  ))
  .add("without image", () => (
    <Card caption="A Rare Phenomenon" username="bsoropia" />
  ));
