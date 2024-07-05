import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

export default function ToastComponent() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Toast",
      text2: "This is the toast message",
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={showToast}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({});
