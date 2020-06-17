import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookUIRoot from "./storybook";
import "./i18n";
import getFeed from "./src/services/get-feed";

import Feed from "./src/Feed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default function App() {
  const [feed, setFeed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("calling get feed!");
    getFeed().then(({ errorMessage, feed: feedData }) => {
      if (!errorMessage) {
        setFeed(feedData);
      } else {
        setErrorMessage(errorMessage);
      }
      setIsLoading(false);
    });
  }, [setFeed, setErrorMessage, setIsLoading]);

  const hasReceivedResponse = !isLoading && feed !== null && !errorMessage;
  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {hasReceivedResponse && (
        <>
          <Feed posts={feed.posts} />
          <StorybookUIRoot />
        </>
      )}
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
}
