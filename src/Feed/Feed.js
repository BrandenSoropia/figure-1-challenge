import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { Body } from "../common/components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Card from "./components/Card";

// TODO: Figure out why I can't fully scroll down!
export default function Feed({ posts }) {
  const { t } = useTranslation();

  if (posts === null) {
    return null;
  }

  return (
    <SafeAreaView>
      {posts.length >= 1 && (
        <FlatList
          data={posts}
          renderItem={({ item: { caption, image, username } }) => (
            <Card caption={caption} images={image} username={username} />
          )}
          keyExtractor={({ id }) => id}
        />
      )}
      {posts.length === 0 && <Body>{t("SORRY_NO_POSTS")}</Body>}
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
