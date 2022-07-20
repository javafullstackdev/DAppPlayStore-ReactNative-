import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';


export default function VerifyIdentity({navigation}) {
  
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/Vector-backward.png')} />
      </TouchableOpacity>
      <View style={styles.fixCenter}>
        <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Verify Your Identity</Text>
        <Text style={{fontSize:14,fontWeight:400, fontFamily:'Roboto',textAlign:'center',color:'#A5AEC6', marginTop:20}}>Enter your phone number to varify your identity. We will send you a verification code on your phone number</Text>
      <View style={{flexDirection:'row'}}>
        <TextInput style={styles.inputFieldArea}/>
        <TextInput style={styles.inputFieldNumber}/>
      </View>        
      <TouchableOpacity style={styles.createroundButton} onPress={()=>navigation.navigate('CreatePassword')}>
          <Text style = {styles.createbutton} >
                Send Verification Code
          </Text>
      </TouchableOpacity>
     </View>
     
    </View>

  );
}

const styles = StyleSheet.create({
   container: {
    paddingTop: 40,
    paddingHorizontal:30
    },

   createbutton:{
    color:'white',
    fontFamily:'Roboto',
    fontSize:14,
    marginRight:10,
    textAlign:'center',
  },
 
  createroundButton:{
    width:"100%",
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop:303,
    backgroundColor:'#2862F8',
    border: '1px solid #2862F8',
  },
  fixCenter:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFieldArea: {
    borderRadius:5,
    marginTop:50,
    padding: 14,
    fontSize: 14,
    width: '20%',
    backgroundColor:'#EDF7FD',
    outline:'none',
    marginRight:10
  },
  inputFieldNumber: {
    borderRadius:5,
    marginTop:50,
    padding: 14,
    fontSize: 14,
    width: '90%',
    backgroundColor:'#EDF7FD',
    outline:'none'
  }
    
});