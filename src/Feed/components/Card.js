import React from "react";
import { StyleSheet, View, Image } from "react-native";
import PropTypes from "prop-types";
import { Body, Heading } from "../../common/components";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  caption: {
    paddingBottom: 8,
  },
  image: {
    height: "50%",
    width: "100%",
  },
  userDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  profileImage: {
    height: 32,
    width: 32,
    marginRight: 8,
    borderRadius: 999,
  },
});

export default function Card({ caption, images, username }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.caption}>{caption}</Heading>
      {images.post && (
        <Image style={styles.image} source={{ uri: images.post }} />
      )}
      <View style={styles.userDetailsContainer}>
        {images.profile && (
          <Image style={styles.profileImage} source={{ uri: images.profile }} />
        )}
        <Body>{username}</Body>
      </View>
    </View>
  );
}

Card.propTypes = {
  caption: PropTypes.string.isRequired,
  images: PropTypes.shape({
    post: PropTypes.string,
    profile: PropTypes.string,
  }),
  username: PropTypes.string.isRequired,
};

Card.defaultProps = {
  images: null,
};
