import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

async function signUp(email, username, password) {
  console.log("pressed");
  await fetch("https://3776-106-206-158-167.ngrok-free.app/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((res) => {
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

const SignUpButton = ({ email, username, password }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={async () => {
          try {
            await signUp(email, username, password);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignUpButton;

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
