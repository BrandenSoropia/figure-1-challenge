import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  body: {
    fontSize: 14,
  },
});

export default function Body({ textId, children, style }) {
  const { t } = useTranslation();

  return (
    <Text style={[styles.body, style]}>{textId ? t(textId) : children}</Text>
  );
}

Body.propTypes = {
  textId: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.shape({}),
};

Body.defaultProps = {
  textId: null,
  children: null,
  style: {},
};
