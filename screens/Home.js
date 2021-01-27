import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const imagelink =
    "https://admin.hksinc.com/wp-content/uploads/2018/09/SanFrancisco_01.jpg";
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ImageScreen", imagelink)}
      >
        <Image
          style={{ height: 200, width: 300 }}
          source={{
            uri: imagelink
          }}
        />
      </TouchableOpacity>
    </View>
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
