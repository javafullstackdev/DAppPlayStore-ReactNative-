import React,{useState} from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PasswordField from './PasswordField'
export default function CreatePassword() {

  const [password,setPassword]=useState('');
  const [background,setBackground]=useState('black')
  const testAlphbet = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
  const testLength= new RegExp("^(?=.{5,})");

  const verifyPassword=(data)=>{
    setPassword(data);
    if(testAlphbet.test(password)) setBackground('white');
    if(testLength.test(password)) setBackground('green');//use Async Await
    
  };
  
  return (
    <View style={styles.container}>
    
      <Image source={require('../assets/Vector-backward.png')}/>
      <View style={styles.fixCenter}>
        <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Create Password</Text>
        <Text style={{fontSize:14,fontWeight:400, fontFamily:'Roboto',textAlign:'center',color:'#A5AEC6', marginTop:20}}>This password will unlock your DAPP PLAY STORE wallet only on this device</Text>

            <TouchableOpacity style={styles.createroundButton}>
              <Text style = {styles.createbutton}>
                Create a New Wallet
                </Text>
            </TouchableOpacity>
      </View>
    <Text style={styles.descText} >New Password</Text>  
    <PasswordField verifyPassword={text=>verifyPassword(text)}/>
    <Text style={styles.descText} >New Password</Text>  
    <PasswordField/>  
    <Text style={styles.descText}>{background}</Text>
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
  descText:{
    marginTop:30,
    fontFamily:'Roboto',
    fontSize:12,
  },
  createroundButton:{
    width:"100%",
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop:30,
    background:'#2862F8',
    border: '1px solid #2862F8',
  },
  fixCenter:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
    
});