import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform ,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import WelcomePage from './welcome';


const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    
    <SafeAreaView style={{backgroundColor:"0379e6"}}>
    <StatusBar barStyle="light-content" backgroundColor="#0379e6"  />
    <View style={styles.headerContainer}>
      
      <TouchableOpacity onPress={() => navigation.goBack(WelcomePage)}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.placeholder} />
    </View>

    </SafeAreaView>

    
    
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom:10,
    backgroundColor: '#0379e6', 
    height:40,
    // height: 40 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0), 
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  placeholder: {
    width: 24, 
  },
});

export default Header;
