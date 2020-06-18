import React from "react";
import { storiesOf } from "@storybook/react-native";
import Feed from "./Feed";
import { mockPosts } from "../__mocks__/mock-feed";

storiesOf("Feed", module)
  .add("with no posts", () => <Feed posts={[]} navigation={{}} />)
  .add("with one post", () => <Feed posts={[mockPosts[0]]} navigation={{}} />)
  .add("with many posts", () => <Feed posts={mockPosts} navigation={{}} />);
