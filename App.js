import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookUIRoot from "./storybook";
import { useTranslation } from "react-i18next";
import "./i18n";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <StorybookUIRoot />
    </View>
  );
}
