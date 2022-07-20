import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';


export default function VerificationCode({navigation}) {
  
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/Vector-backward.png')} />
      </TouchableOpacity>
      <View style={styles.fixCenter}>
        <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Verification Code</Text>
        <Text style={{fontSize:14,fontWeight:400, fontFamily:'Roboto',textAlign:'center',color:'#A5AEC6', marginTop:20}}>Enter your phone number to varify your identity. We will send you a verification code on your phone number</Text>
      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <TextInput maxLength='1' style={styles.inputFieldArea}/>
        <TextInput maxLength='1' style={styles.inputFieldArea}/>
        <TextInput maxLength='1' style={styles.inputFieldArea}/>
        <TextInput maxLength='1' style={styles.inputFieldArea}/>        
      </View>  
      <Text style={styles.receiveCode}>Didn’t receive a code?</Text>    
          <Text style = {styles.resendButton} onPress={()=>navigation.navigate('CreatePassword')} >
                Resend Code
          </Text>
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
  receiveCode:{
    fontSize:14,
    fontFamily:'Roboto',
    marginTop:50,
    color:'#A5AEC6'

  },
  resendButton:{
    fontSize:14,
    
  },

  inputFieldArea: {
    borderRadius:5,
    marginTop:50,
    padding: 14,
    fontSize: 14,
    width:'15%',
    backgroundColor:'#EDF7FD',
    outline:'none',
    marginRight:20,
    widwth:15,
    
  }
    
});