import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Body } from "../common/components";
import { useTranslation } from "react-i18next";
import getFeed from "../services/get-feed";
import Feed from "./Feed";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * Container for Feed that handles fetching data, showing loading and displaying errors.
 */
export default function FeedContainer({ navigation }) {
  const { t } = useTranslation();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getFeed().then(({ errorMessage, feed }) => {
      if (!errorMessage) {
        setPosts(feed.posts);
      } else {
        setErrorMessage(errorMessage);
      }
      setIsLoading(false);
    });
  }, [setPosts, setErrorMessage, setIsLoading]);

  return (
    <View>
      {isLoading && (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Body style={styles.loadingText}>{t("LOADING")}</Body>
        </>
      )}
      {!isLoading && <Feed posts={posts} navigation={navigation} />}
      {errorMessage && <Body>{errorMessage}</Body>}
    </View>
  );
}

FeedContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
