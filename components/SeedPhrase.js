import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

const spinValue = new Animated.Value(0);
export default function SeedPhrase() {


  
  
  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/Vector-backward.png')}/>
      <View style={styles.fixCenter}>
      <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Secure Your Wallet</Text>
         <Text style={{color:'#A5AEC6', fontFamily:'Roboto',fontSize:'14', marginTop:30}}>Secure your Wallet's <Text style={{color:'#2862F8'}}>Seed Phrase</Text></Text>
      <View style={{flexDirection:'row',marginTop:30}}>
        <Text style={{fontFamily:'Roboto',fontSize:'14', color:'#7978B6', marginRight:10}}> Why Seed Phrase?</Text>
          <Image source={require('../assets/Vector-exclamation.png')}/>
      </View>
      <View style={styles.paper}>
      </View>


          </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
   container: {
    paddingTop: 40,
    paddingHorizontal:30
    },
  fixCenter:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper:{
    // border: '1px solid #2862F8',
    marginTop:30,
    borderRadius:20,
    height:300,
    width:'100%',
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 4,
      width: 4
    }
    }    
});