import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { Body } from "../common/components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Card from "./components/Card";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});

/**
 * Display all posts in a scrollable list.
 *
 * Improvement: Instead of passing the clicked post's data directly to PostDetails,
 * it'd be good to fetch the selected post's details again in case there are new updates
 * (like a new star, a new comment etc...).
 *
 * TODO: Figure out why I can't fully scroll down!
 */
export default function Feed({ posts, navigation }) {
  const { t } = useTranslation();

  if (posts === null) {
    return null;
  }

  return (
    <View style={styles.container}>
      {posts.length >= 1 && (
        <SafeAreaView>
          <FlatList
            data={posts}
            renderItem={({ item: { caption, images, username, stats } }) => (
              <Card
                caption={caption}
                images={images}
                username={username}
                viewPost={() => {
                  navigation.navigate("PostDetails", {
                    caption,
                    images,
                    username,
                    stats,
                  });
                }}
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </SafeAreaView>
      )}
      {posts.length === 0 && <Body>{t("SORRY_NO_POSTS")}</Body>}
    </View>
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
  navigation: PropTypes.shape({}.isRequired),
};

Feed.defaultProps = {
  posts: null,
};
