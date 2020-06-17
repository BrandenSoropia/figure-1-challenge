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

export default function PostDetails({ caption, images, username, stats }) {
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
};

PostDetails.defaultProps = {
  images: null,
  stats: null,
};
