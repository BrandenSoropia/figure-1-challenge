import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Constants from "expo-constants";

import Card from "./components/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
});

// TODO: Figure out why I can't fully scroll down!
export default function Feed({ posts }) {
  const { t } = useTranslation();

  if (!posts || !posts.length) {
    return (
      <View style={styles.container}>
        <Text>{t("SORRY_NO_POSTS")}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item: { caption, image, username } }) => (
          <Card caption={caption} images={image} username={username} />
        )}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
}

Feed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      caption: PropTypes.string,
      image: PropTypes.shape({
        profile: PropTypes.string,
        post: PropTypes.string,
      }),
      stats: PropTypes.shape({
        star: PropTypes.number,
        follow: PropTypes.number,
        views: PropTypes.number,
      }),
    })
  ),
};

Feed.defaultProps = {
  posts: null,
};
