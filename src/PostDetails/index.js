import React from "react";
import { Heading, Body, UserDetails } from "../common/components";
import { StyleSheet, View, Image } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    paddingBottom: 8,
  },
  postImage: {
    height: "50%",
    width: "100%",
  },
});

/**
 * Display post details when a card is clicked from Feed.
 *
 * Right now, it gets the data needed to populate the page directly from passed params
 * from the card click.
 *
 * Improvement: Instead of passing the clicked post's data directly to PostDetails,
 * it'd be good to fetch the selected post's details again in case there are new updates
 * (like a new star, a new comment etc...).
 */
export default function PostDetails({ route }) {
  const { caption, images, username, stats } = route.params;

  return (
    <View style={styles.container}>
      <Heading style={styles.caption}>{caption}</Heading>
      {images.post && (
        <Image style={styles.postImage} source={{ uri: images.post }} />
      )}
      <UserDetails images={images} username={username} stats={stats} />
    </View>
  );
}

PostDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      caption: PropTypes.string.isRequired,
      images: PropTypes.shape({
        post: PropTypes.string,
        profile: PropTypes.string,
      }),
      username: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        star: PropTypes.number.isRequired,
        follow: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};
