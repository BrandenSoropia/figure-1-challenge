import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { Body, Heading } from "../../common/components";

const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "100%",
    padding: 16,
    // `elevation` enough for Android
    elevation: 5,
    // more control for iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  caption: {
    paddingBottom: 8,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default function Card({ caption, imageSrc, username }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.caption}>{caption}</Heading>
      {imageSrc && <Image style={styles.image} source={{ uri: imageSrc }} />}
      <Body>{username}</Body>
    </View>
  );
}

Card.propTypes = {
  caption: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  username: PropTypes.string.isRequired,
};

Card.defaultProps = {
  imageSrc: null,
};
