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
        <Text style={styles.manual}>Manual</Text>
        <Text style={styles.text}>Write down your seed phrase on piece of paper and store in safe place</Text>
        <View style={{flexDirection:'row'}}>
         <Text style={styles.text, [{marginTop:20,marginRight:40}]}>Security Level</Text>
         <Text style={styles.text, [{marginTop:20,fontSize:12,color:'#4BADE4'}]}>Very trong</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
          <View style={{width:60, height:6,backgroundColor:'#4BADE4',borderRadius:3, marginRight:5}}/>
          <View style={{width:60, height:6,backgroundColor:'#4BADE4',borderRadius:3, marginRight:5}}/>
          <View style={{width:60, height:6,backgroundColor:'#4BADE4',borderRadius:3, marginRight:5}}/>
          <View style={{width:60, height:6,backgroundColor:'#EDF7FD',borderRadius:3, marginRight:5}}/>
        </View>
        <Text style={styles.text,[{marginTop:10,fontSize:14, fontWeight:500}]}>Risks Are</Text>

        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  You lose it</Text>
        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  You forget where you put it</Text>
        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  Someone else finds it</Text>
        <Text style={styles.text,[{marginTop:10,fontSize:14, fontWeight:500}]}>Other Options : <Text style={{color:'#A5AEC6',fontSize:14}}>Doesn't have to be  paper</Text></Text>
        <Text style={styles.text, [{marginTop:20,marginRight:40, fontWeight:500}]}>Tips:</Text>
        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  Store in bank vault</Text>
        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  Store in safe</Text>
        <Text style={styles.text, [{marginTop:10,marginRight:40}]}> <Text>{'\u2022'}</Text>  Store in secure place</Text>
        <TouchableOpacity style={styles.startButton} >
          <Text style={{fontFamily:'Roboto',fontSize:16, fontWeight:'500', color:'white'}}>Start
          </Text>
        </TouchableOpacity>
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
  text:{
    fontFamily:'Roboto',
    fontSize:14,
  },
  manual:{
    fontFamily:'Roboto',
    fontSize:16,
    fontWeight:600,
    marginBottom:10,
  },
  paper:{
    // border: '1px solid #2862F8',
    marginTop:30,
    borderRadius:20,
    padding:10,
    paddingTop:20,
    width:'100%',
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 4,
      width: 4
    }
    },
    startButton:{
      marginTop:50,
      alignItems:'center',
      justifyContent:'center',
      height:44,
      textAlign:'center',
      backgroundColor:'#2862F8',
      borderRadius:10
    }    
});