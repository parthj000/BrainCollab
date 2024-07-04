import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SignInPage from "./screens/SignInPage";
import SignUpPage from "./screens/SignUpPage";

const App = () => {
  const [screen, setScreen] = useState("SignIn");

  return (
    <>
      {screen === "SignIn" ? (
        <SignInPage setScreen={setScreen} />
      ) : (
        <SignUpPage setScreen={setScreen} />
      )}
    </>
  );
};

export default App;
