// screens/SignUpPage.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import SignUpButton from "../components/SignUpButton";
import Toast from "react-native-toast-message";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Toast />
      <View style={styles.container}>
        <Image source={require("../assets/up.jpg")} style={styles.image} />

        {/* username TextInput */}

        <TextInput
          maxLength={20}
          style={styles.inputEmail}
          placeholder="Username "
          onChangeText={(username) => setUsername(username)}
        />

        {/* email TextInput */}
        <TextInput
          style={styles.inputEmail}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(email) => setEmail(email)}
        />

        {/* Password TextInput */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.fullInput]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color="#6c757d"
              style={styles.toggleIcon}
            />
          </TouchableWithoutFeedback>
        </View>

        {/* Sign Up Button */}

        <SignUpButton email={email} password={password} username={username} />

        {/* Option Text */}
        <Text style={styles.optionText}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "blue" }}>
            Log In
          </Link>
        </Text>
      </View>
    </>
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
  },
  fullInput: {
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    width: "100%",
  },

  optionText: {
    marginTop: 10,
    fontSize: 14,
    color: "rgb(80 84 89)",
  },
  image: {
    width: "119%",
    height: 300,
    aspectRatio: "1/1",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  toggleIcon: {
    position: "absolute",
    right: 12,
    top: 12,
  },
  inputEmail: {
    width: "100%",
    height: 40,
    borderColor: "rgb(219 217 217)",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 9,
  },
});
