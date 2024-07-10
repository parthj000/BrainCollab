import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, ScrollView } from "react-native";
import { Calendar } from "react-native-big-calendar";
import {
  Button,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Pressable } from "react-native";
import SelectTimeComponent from "./SelectTime.js";

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("week");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Picker
          selectedValue={view}
          style={styles.picker}
          onValueChange={(itemValue) => setView(itemValue)}
        >
          <Picker.Item label="Day View" value="day" />
          <Picker.Item label="Week View" value="week" />
          <Picker.Item label="Month View" value="month" />
        </Picker>

        <Calendar
          events={events}
          height={600}
          mode={view}
          style={styles.calendar}
        />

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => setModalVisible(true)}
            style={styles.button}
          >
            Add Task
          </Button>
          <Button
            mode="contained"
            onPress={() => setModalVisible(true)}
            style={styles.button}
          >
            Add Event
          </Button>
        </View>
      </View>
      <View>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput placeholder="nice" />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  button: {
    margin: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    width: 50,
    height: 50,

    backgroundColor: "black",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MyCalendar;
