import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/in.jpg")} style={styles.image} />
      <TextInput style={styles.input} placeholder="Username or email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Link href="/welcome" style={styles.signInButton}>
        Log in
      </Link>
      {/* <TouchableOpacity style={styles.signInButton}>
        <Text
          style={styles.signInButtonText}
          onPress={() => {
            setWlcm("yes");
          }}
        >
          Log in
        </Text>
      </TouchableOpacity> */}
      <Text style={styles.optionText}>
        Don't have an account?{" "}
        <Link href="/signup" style={{ color: "blue" }}>
          Sign Up
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    height: 40,
    borderColor: "rgb(219 217 217)",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 9,
    width: "100%",
  },
  signInButton: {
    color: "white",
    width: "100%",
    backgroundColor: "#007BFF",
    padding: 12,
    marginTop: 15,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  optionText: {
    marginTop: 10,
    fontSize: 14,
    color: "rgb(80 84 89)",
  },
  image: {
    width: "119%",
    height: 300,
    marginBottom: 20,
    aspectRatio: "1/1",
  },
});
