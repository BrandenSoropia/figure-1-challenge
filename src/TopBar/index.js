import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Heading } from "../common/components";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  toggleStorybookButton: {
    alignSelf: "flex-end",
  },
});

export default function TopBar({ toggleStoriesDisplay }) {
  return (
    <View style={styles.container}>
      <Heading>Figure 1 Challenge: Feed App</Heading>
      <Button
        style={styles.toggleStorybookButton}
        onPress={toggleStoriesDisplay}
        title="🐞"
        color="#841584"
        accessibilityLabel="Toggle Storybook Display"
      />
    </View>
  );
}

TopBar.propTypes = {
  toggleStoriesDisplay: PropTypes.func.isRequired,
};
