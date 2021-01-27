import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import ImageScreen from "./screens/Image";

const Stack = createStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                styles={{ marginRight: 20 }}
                onPress={() => navigation.navigate("Home")}
                title="Done"
                color="blue"
              />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
