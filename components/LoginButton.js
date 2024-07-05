import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

async function logIn(email, password) {
  await fetch("https://3776-106-206-158-167.ngrok-free.app/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      Toast.show({
        type: "success",
        text1: data.message,
      });
      console.log(data);
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message,
      });
    });
}

const LoginButton = ({ email, password }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={async () => {
          try {
            await logIn(email, password);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <Text style={styles.signUpButtonText}>Log In</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  signUpButton: {
    width: "100%",
    backgroundColor: "#007BFF",
    padding: 12,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  signUpButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
