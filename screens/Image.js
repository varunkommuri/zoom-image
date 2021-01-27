import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

export default function ImageScreen(props) {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window");
  console.log(HEIGHT);
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={Dimensions.get("window").width}
        imageHeight={Dimensions.get("window").height}
      >
        <Image
          resizeMode="center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 739,
            width: 393,
            transform: [{ rotate: "90deg" }]
          }}
          source={{
            uri: route.params
          }}
        />
      </ImageZoom>
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
