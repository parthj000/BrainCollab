import { Link, router, useRouter,useRouteParams } from "expo-router";
import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image,ImageBackground } from "react-native";
import Header from "./ios";


export default function WelcomePage() {
  const route = useRouter();
    
  return(
    <>



    {/* <View style={{backgroundColor:"#2596be",width:"100%",height:"7%",zIndex:1}}>
      <Text>BrainFlow</Text>
    </View> */}
  <View style={{backgroundColor:"#ECECEC" , borderRadius:20}}>

        

        <ImageBackground style={styles.bgimage} source={require("../assets/welcome-bg.png")}></ImageBackground> 
        
        <View style={styles.first}>
        <Text style={styles.Welcome}>Welcome <Text style={{color:"black", fontWeight:"bold"}}>back,</Text></Text>
        <Text style={styles.username}>Nitish !</Text>
        <TextInput maxLength={25} style={styles.usernameGoal} placeholder="set a goal for today">Work for next 5hour</TextInput>
        
        </View>

        <View style={styles.second}>

          
          <TouchableOpacity style={styles.Actvitiy} onPress={() => route.push('/activities')} >
          
            <Image style={{height:"80%" ,width:"100%"}} source={require("../assets/clock.png")}></Image>
          <Text>Actvitiy</Text>   
              
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.Calender} onPress={() => route.push('/calendar')}>
          <Image style={{height:"80%" ,width:"100%"}} source={require("../assets/calendar.png")}></Image>
          <Text  >Calender</Text>          
          </TouchableOpacity>

          <TouchableOpacity style={styles.Resources} onPress={() => route.push('/resources')}>
          <Image style={{height:"80%" ,width:"100%"}} source={require("../assets/books.png")}></Image>
          <Text >Resources</Text>
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.Progress} onPress={() => route.push('/progress')}>
          <Image style={{height:"80%" ,width:"100%"}} source={require("../assets/bars.png")}></Image>
          <Text >Progress</Text>
          </TouchableOpacity>

        </View>

    </View>
    </>
    

  );
  
  
}

const styles = StyleSheet.create({
  
  bgimage:{
    position: 'absolute',
    top:-210,
    left: 0,
    right: 0,
    bottom: 0,
    width: 500,
    height: 505,
    zIndex: -1,
  },
  first:{
    

    paddingLeft:40,
  },

  Welcome:{
    fontWeight:"bold",
    marginTop:"15%",
    fontSize:40,
    color:"black"

    

  },
  username:{
    color:"black",
    fontSize:25,
    fontWeight:"00",
  },

  usernameGoal:{
    marginTop:35,
    width:"83%",
    backgroundColor:"white",
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
    
    
    paddingTop:60,
    alignItems:'center',
    flexDirection:"row",
    flexWrap:"wrap",
    gap:15,
    paddingLeft:40,
    paddingBottom:"100%" 
  },
  

  Actvitiy:{
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor:"white",
    width:"40%",
    height:140,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
  },

  Calender:{
    overflow: 'hidden', 
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    
    elevation: 5,
    backgroundColor:"white",
    width:"40%",
    height:140,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",

  },

  Resources:{
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor:"white",
    width:"40%",
    height:140,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
  },

  Progress:{
    overflow: 'hidden', 
   shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor:"white",
    width:"40%",
    height:140,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",

  }


  
});