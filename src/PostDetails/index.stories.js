import React from "react";
import { storiesOf } from "@storybook/react-native";
import PostDetails from "./";
import { mockFormattedPosts } from "../__mocks__/mock-feed";

const { image: images, ...rest } = mockFormattedPosts[0];
const mockRoute = {
  params: {
    ...mockFormattedPosts[0],
  },
};
storiesOf("Post Details", module).add("shows all details", () => (
  <PostDetails route={mockRoute} />
));
