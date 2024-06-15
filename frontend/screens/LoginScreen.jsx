import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <FontAwesome5 name="graduation-cap" size={35} color='#0078fb' style={styles.icon}/>
            <Text style={styles.title}>LEMASS</Text>
            <Text style={styles.subTitle}>Experiencing the University of the future</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="USERNAME" />
            <TextInput style={styles.input} placeholder="PASSWORD" secureTextEntry={true} />
            <TouchableOpacity style={styles.link}>
              <Text style={styles.forgotPassword}>Forgot password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:20,
    //backgroundColor:'#0078fb',
  },
  icon:{
    marginLeft:110,
    bottom:-9,
    transform: [
      {rotate:'20deg'},
      {rotateY:'180deg'}
    ],
  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    top:70,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#0078fb',
  },
  subTitle:{
    fontSize:18,
    color:'#000000',
    marginTop:30,
  },
  form:{
    justifyContent:'center',
    alignItems:'center',
    top:200,
  },
  input:{
    width:'90%',
    height:60,
    borderColor:'#d7d7d7',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:20,
    //fontSize:16,
  },
  link:{
    alignSelf:'flex-end',
    marginRight:20,
  },
  forgotPassword:{
    fontSize:16,
    color:'#0078fb',
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    top:250,
  },
  btn:{
    width:'90%',
    height:60,
    backgroundColor:'#0078fb',
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:20,
  },
  buttonText:{
    fontSize:18,
    color:'#ffffff',
    alignSelf:'center',
    marginTop:15,
    
  }
})