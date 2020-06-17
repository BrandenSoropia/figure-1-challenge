import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Feed({ posts }) {
  const { t } = useTranslation();
  if (!posts.length) {
    return (
      <View style={styles.container}>
        <Text>{t("SORRY_NO_POSTS")}</Text>
      </View>
    );
  }

  return <View style={styles.container}></View>;
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
  ).isRequired,
};
