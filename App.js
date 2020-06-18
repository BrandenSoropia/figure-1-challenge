// Magic things that must be on top of entry file
import "react-native-gesture-handler";
import "./i18n";

import React from "react";
import { Button } from "react-native";
import StorybookUIRoot from "./storybook";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./src/Feed";
import PostDetails from "./src/PostDetails";

const Stack = createStackNavigator();

/**
 * Shows app and each component via Storybook.
 *
 * Note, Storybook needs some deeper configuration to take up the whole
 * device screen.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        {/* Seems the headerRight is applied on all screens... Not sure why atm! */}
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Storybook")}
                title="🐞"
                color="#fff"
                accessibilityLabel="Toggle Storybook Display"
              />
            ),
          })}
        />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Storybook" component={StorybookUIRoot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
