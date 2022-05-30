import React from 'react';
import { StyleSheet,View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Logo() {
  return (
    <View style={styles.background}>
      <LinearGradient 
      colors={['#2862F8', '#4BADE4']} 
      start={{
        x: 1,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={styles.box} />
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop:0,
    paddingHorizontal: 0,
  },
  box: {
    width: '100%',
    height:'100%',
  },
  container:{
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop:'50%'    
  },
   logo: {
    height: 296,
    width: 346,
    textAlign:'center'
  }
});