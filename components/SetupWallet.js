import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

const spinValue = new Animated.Value(0);
export default function SetupWallet({navigation}) {

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10500,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../assets/Vector-backward.png')} />
      </TouchableOpacity>
      <View style={styles.fixCenter}>
      <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Setup Your Wallet</Text>
      <Text style={{fontSize:14,fontWeight:400, fontFamily:'Roboto',textAlign:'center',color:'#A5AEC6', marginTop:20}}>Import an existing wallet or create a new one</Text>
          <View style={styles.logoGraphic}>
          <Animated.Image
              style={{ transform: [{ rotate: spin }], width: 212, height: 212 }}
                  source={require('../assets/logoRound.png')}/>
            <LinearGradient 
              colors={['#2862F8', '#4CAFE4']} 
              start={{
                x: 1,
                y: 0
              }}
              end={{
                x: 1,
                y: 1
              }}
              style={styles.boxRound} >
                <Image source={require('../assets/logomarker.png')} />
            </LinearGradient>
        </View>
        <TouchableOpacity style={styles.roundButton}>
            <Text style = {styles.button}>
             Import Using Seed Phrase
              </Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton}>
            <Text style = {styles.button}>
              Synch With DAPP PLAY STORE Extension
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createroundButton} onPress={()=>navigation.navigate('CreatePassword')}>
            <Text style = {styles.createbutton} >
              Create a New Wallet
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
  boxRound: {
    position:'absolute',
    width: 150,
    height: 150,
    borderRadius:75, 
    justifyContent: "center",
    alignItems: "center",},
  button:{
    color:'#2862F8',
    fontFamily:'Roboto',
    fontSize:14,
    marginRight:10,
    textAlign:'center',
  },
   createbutton:{
    color:'white',
    fontFamily:'Roboto',
    fontSize:14,
    marginRight:10,
    textAlign:'center',
  },
  roundButton:{
    width:"100%",
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop:30,
    backgroundColor:'white',
    border: '1px solid #2862F8',
  },
  createroundButton:{
    width:"100%",
    height: 44,
    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop:30,
    backgroundColor:'#2862F8',
    border: '1px solid #2862F8',
  },
  fixCenter:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoGraphic:{
    marginTop:80,
    justifyContent: "center",
    alignItems: "center",
    }
    
});