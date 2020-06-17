import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import StorybookUIRoot from "./storybook";
import "./i18n";
import getFeed from "./src/services/get-feed";
import Constants from "expo-constants";

import TopBar from "./src/TopBar";
import Feed from "./src/Feed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
  loadingText: {
    marginTop: 8,
  },
});

/**
 * Shows app and each component via Storybook.
 *
 * Note, Storybook needs some deeper configuration to take up the whole
 * device screen.
 */
export default function App() {
  const [showStorybook, setShowStoryBook] = useState(false);
  const [feed, setFeed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
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

  // Nasty way of showing Storybook or actual app. Needs clean up!
  if (showStorybook) {
    return (
      <View style={styles.container}>
        <TopBar
          toggleStoriesDisplay={() => {
            setShowStoryBook(!showStorybook);
          }}
        />
        <StorybookUIRoot />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TopBar
          toggleStoriesDisplay={() => {
            setShowStoryBook(!showStorybook);
          }}
        />
        {isLoading && (
          <>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </>
        )}
        {hasReceivedResponse && (
          <>
            <Feed posts={feed.posts} />
          </>
        )}
        {errorMessage && <Text>{errorMessage}</Text>}
      </View>
    );
  }
}
