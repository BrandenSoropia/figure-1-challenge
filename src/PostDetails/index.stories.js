import React from "react";
import { storiesOf } from "@storybook/react-native";
import PostDetails from "./";
import { mockPosts } from "../__mocks__/mock-feed";

const { image: images, ...rest } = mockPosts[0];
const mockRoute = {
  params: {
    ...rest,
    images,
  },
};
storiesOf("Post Details", module).add("shows all details", () => (
  <PostDetails route={mockRoute} />
));
