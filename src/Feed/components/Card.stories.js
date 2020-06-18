import React from "react";
import { storiesOf } from "@storybook/react-native";
import Card from "./Card";

const mockViewPost = () => {
  alert("Should go to a post!");
};
storiesOf("Card", module)
  .add("with post image", () => (
    <Card
      caption="A Rare Phenomenon"
      images={{
        post:
          "https://images.unsplash.com/photo-1467934466021-f2425d752934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022241431650d3ce7fbffb73431a065a&auto=format&fit=crop&w=400&q=60",
        profile:
          "https://images.unsplash.com/profile-1532466997843-88fe931a8056?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
      }}
      username="bsoropia"
      viewPost={mockViewPost}
    />
  ))
  .add("without post image", () => (
    <Card
      caption="A Rare Phenomenon"
      images={{
        profile:
          "https://images.unsplash.com/profile-1532466997843-88fe931a8056?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
      }}
      username="bsoropia"
      viewPost={mockViewPost}
    />
  ));
