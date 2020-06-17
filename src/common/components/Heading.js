import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function Heading({ textId, children, style }) {
  const { t } = useTranslation();

  return (
    <Text style={[styles.heading, style]}>{textId ? t(textId) : children}</Text>
  );
}

Heading.propTypes = {
  textId: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.shape({}),
};

Heading.defaultProps = {
  textId: null,
  children: null,
  style: {},
};
