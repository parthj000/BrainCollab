
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function WelcomePage() {

  return(
    <View styles={styles.main}>

        <View style={styles.first}>
        <Text style={styles.Welcome}>Welcome back,</Text>
        <Text style={styles.username}>Name</Text>
        <Text style={styles.usernameGoal}>Work for next 5hour</Text>
        <Text style={styles.Goal}>Today Goal</Text>
        </View>

        <View style={styles.second}>

          <TouchableOpacity style={styles.Actvitiy} >
          <Text>Actvitiy</Text>       
          </TouchableOpacity>

          <TouchableOpacity style={styles.Calender}>
          <Text >Calender</Text>          
          </TouchableOpacity>

          <TouchableOpacity style={styles.Resources}>
          <Text >Resources</Text>
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.Progress}>
          <Text >Progress</Text>
          </TouchableOpacity>

        </View>

    </View>
    

  );
  
  
}

const styles = StyleSheet.create({

  first:{
    marginLeft:40,
  },

  Welcome:{
    marginTop:"30%",
    fontSize:40,
    

  },
  username:{
    fontSize:25,
    fontWeight:"bold",
  },

  usernameGoal:{
    marginTop:35,
    width:"83%",
    backgroundColor:"gray",
    textAlign:"center",
    height:35,
    padding:5,
    borderRadius:25,
  },

  Goal:{
    marginTop:5,
    width:"83%",
    
    textAlign:"center",
    height:35,
    padding:5,
    borderRadius:25,
  },

  
  second:{
    marginTop:35,
    alignItems:'center',
    flexDirection:"row",
    flexWrap:"wrap",
    gap:15,
    marginLeft:40,
    
    
  },
  

  Actvitiy:{
    backgroundColor:"gray",
    width:"40%",
    height:150,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
  },

  Calender:{
    backgroundColor:"gray",
    width:"40%",
    height:150,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",

  },

  Resources:{
    backgroundColor:"gray",
    width:"40%",
    height:150,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
  },

  Progress:{
    backgroundColor:"gray",
    width:"40%",
    height:150,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",

  }


  
});