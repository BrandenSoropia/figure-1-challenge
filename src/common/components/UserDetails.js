import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Body from "./Body";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsContainer: {
    marginTop: 8,
    flexDirection: "column",
  },
  profileImage: {
    height: 32,
    width: 32,
    marginRight: 8,
    borderRadius: 999,
  },
  statCategory: {
    fontWeight: "bold",
  },
});

export function BoldedText({ children }) {
  return <Body style={styles.statCategory}>{children}</Body>;
}

BoldedText.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Guaranteed username at least, so always show it! Only show other stuff if given
 */
export default function UserDetails({ images, username, stats }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {images.profile && (
          <Image style={styles.profileImage} source={{ uri: images.profile }} />
        )}
        <Body>{username}</Body>
      </View>
      <View style={styles.statsContainer}>
        {stats?.star && (
          <BoldedText>{`${t("NUMBER_OF_STARS")} ${stats?.star}`}</BoldedText>
        )}
        {stats?.views && (
          <BoldedText>{`${t("NUMBER_OF_VIEWS")} ${stats?.views}`}</BoldedText>
        )}
        {stats?.follow && (
          <BoldedText>{`${t("NUMBER_OF_FOLLOWS")} ${
            stats?.follow
          }`}</BoldedText>
        )}
      </View>
    </View>
  );
}

UserDetails.propTypes = {
  images: PropTypes.shape({
    post: PropTypes.string,
    profile: PropTypes.string,
  }),
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    star: PropTypes.number,
    views: PropTypes.number,
    follow: PropTypes.number,
  }),
};

UserDetails.defaultProps = {
  stats: null,
};
