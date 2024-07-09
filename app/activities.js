import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const activities = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/activities.png")}
        width={50}
        height={250}
        resizeMode="cover"
      />
      <Text style={{ alignContent: "center" }}>activities</Text>
    </View>
  );
};

export default activities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
