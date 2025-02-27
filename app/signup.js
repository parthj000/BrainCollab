import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import SignUpButton from "../components/SignUpButton";
import Toast from "react-native-toast-message";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!username) {
      valid = false;
      errors["username"] = "Username is required";
    }

    if (!email) {
      valid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors["email"] = "Email is invalid";
    }

    if (!password) {
      valid = false;
      errors["password"] = "Password is required";
    } else if (password.length < 6) {
      valid = false;
      errors["password"] = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Proceed with form submission
      console.log("Form is valid");
      // Call your SignUpButton component's onPress or equivalent method here
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Sign up successful!',
      });
    } else {
      console.log("Form has errors");
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fix the errors in the form',
      });
    }
  };

  return (
    <>
      <Toast />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          SignUp
        </Text>

        {/* Username TextInput */}
        <TextInput
          maxLength={20}
          style={styles.inputEmail}
          placeholder="Username"
          onChangeText={(val) => setUsername(val)}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        {/* Email TextInput */}
        <TextInput
          style={styles.inputEmail}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(val) => setEmail(val)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Password TextInput */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.fullInput]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color="#6c757d"
              style={styles.toggleIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

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
  optionText: {
    marginTop: 10,
    fontSize: 14,
    color: "rgb(80 84 89)",
  },
  errorText: {
    color: "red",
    marginBottom: 12,
  },
});
