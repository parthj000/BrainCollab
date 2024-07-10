import React, { useState } from 'react';
import { View, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import { Button, TextInput, Provider as PaperProvider, Text,Divider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('week');
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
  const [pickerMode, setPickerMode] = useState(null);
  const [showPicker, setShowPicker] = useState(false);


  
  const handleAddEvent = () => {
    if (!newEvent.title) {
      alert('Please enter a title.');
      return;
    }

    setEvents([...events, newEvent]);
    setModalVisible(false);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        [pickerMode]: selectedDate,
      }));
    }
  };



  

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Picker
          selectedValue={view}
          style={styles.picker}
          onValueChange={(itemValue) => setView(itemValue)}
        >
          <Picker.Item label="Day View" value="day" />
          <Picker.Item label="Week " value="week" />
          <Picker.Item label="Month View" value="month" />
        </Picker>

        <Divider/>

        
        
        <Calendar
          events={events}
          height={600}
          mode={view}
          style={styles.calendar}
        />

        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => setModalVisible(true)} style={styles.button}>
            Add Task
          </Button>
          <Button mode="contained" onPress={() => setModalVisible(true)} style={styles.button}>
            Add Event
          </Button>
        </View>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={styles.modalContent}>
              <TextInput
                label="Title"
                value={newEvent.title}
                onChangeText={(text) => setNewEvent({ ...newEvent, title: text })}
                style={styles.input}
                mode="outlined"
              />
              <TouchableOpacity onPress={() => { setPickerMode('start'); setShowPicker(true); }}>
                <Text style={styles.dateText}>Start Time: {newEvent.start.toLocaleString()}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setPickerMode('end'); setShowPicker(true); }}>
                <Text style={styles.dateText}>End Time: {newEvent.end.toLocaleString()}</Text>
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={newEvent[pickerMode]}
                  mode="datetime"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <Button mode="contained" onPress={handleAddEvent} style={styles.button}>
                Add Event
              </Button>
              <Button mode="contained" onPress={() => setModalVisible(false)} style={styles.button}>
                Cancel
              </Button>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  calendar: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    margin: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#000',
  },
});

export default MyCalendar;
