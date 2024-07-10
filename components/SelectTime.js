import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SelectTimeComponent(props) {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setShow(false);
    setTime(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={showTimepicker}>
        <TextInput
          placeholder={props.placeholderText}
          value={formatTime(time)}
          editable={false}
          style={styles.input}
        />
      </Pressable>
      {show && (
        <DateTimePicker
          mode="time"
          display="spinner"
          value={time}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "rgb(219 217 217)",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 9,
  },
});
