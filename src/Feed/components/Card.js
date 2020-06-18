import React from "react";
import { StyleSheet, View, Image } from "react-native";
import PropTypes from "prop-types";
import { Heading, UserDetails } from "../../common/components";

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
      <UserDetails images={images} username={username} />
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
