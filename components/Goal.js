import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Goal = () => {
  useEffect(() => {
    fetch(`${process.env.BACKEND_URI}/goals`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjhiZjE3NTIxNWEwZjA0NGJmZjRkZjEiLCJlbWFpbCI6ImtAay5jb20iLCJpYXQiOjE3MjA0NjY5ODEsImV4cCI6MTcyMDQ3MDU4MX0.-Ko3Sl4_ra4fgaWhV0QDxuXifoeUznfiyhMZw0Z9ha8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TextInput
      maxLength={25}
      style={styles.usernameGoal}
      placeholder="set a goal for today"
    >
      Work for next 5hour
    </TextInput>
  );
};

export default Goal;

const styles = StyleSheet.create({});
