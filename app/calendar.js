import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, ScrollView } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import { Button, TextInput, Provider as PaperProvider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('week');
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleAddEvent = () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);

    if (isNaN(start) || isNaN(end) || !newEvent.title) {
      alert('Please enter valid start and end times and a title.');
      return;
    }

    setEvents([...events, { ...newEvent, start, end }]);
    setModalVisible(false);
    setNewEvent({ title: '', start: '', end: '' });
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
              <TextInput
                label="Start Time (YYYY-MM-DD HH:mm)"
                value={newEvent.start}
                onChangeText={(text) => setNewEvent({ ...newEvent, start: text })}
                style={styles.input}
                mode="outlined"
                placeholder="2024-07-10 14:30"
              />
              <TextInput
                label="End Time (YYYY-MM-DD HH:mm)"
                value={newEvent.end}
                onChangeText={(text) => setNewEvent({ ...newEvent, end: text })}
                style={styles.input}
                mode="outlined"
                placeholder="2024-07-10 15:30"
              />
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
});
 
export default MyCalendar;
