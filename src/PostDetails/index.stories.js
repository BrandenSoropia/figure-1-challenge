import React from "react";
import { storiesOf } from "@storybook/react-native";
import PostDetails from "./";
import { mockPosts } from "../__mocks__/mock-feed";

const mockPost = mockPosts[0];

storiesOf("Post Details", module).add("shows all details", () => (
  <PostDetails {...mockPost} images={mockPost.image} />
));
