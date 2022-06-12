import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

const spinValue = new Animated.Value(0);
export default function SecureWallet({navigation}) {

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
      <Text style={{fontSize:24,fontWeight:700, fontFamily:'Roboto'}}>Secure Your Wallet</Text>
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
            <Text style={styles.description}> Don’t risk your funds. Protect your wallet by saving your <Text style={{color:'#2862F8'}}> Seed Phrase </Text> in a place you trust. <Text style={{color:'black'}}>It’s the only way to recover your wallet if you get locked out of the app or get a new device.</Text></Text>
            <TouchableOpacity>
              <Text style={styles.remindButton}>Remind Me Later</Text>            
            </TouchableOpacity>
               <Text style={{color:'#A5AEC6', marginTop:10, fontSize:14, fontFamily:'Roboto'}}>(Not Recommended)
               </Text>

            <View style={{flexDirection:'row',marginTop:50,height:6,justifyContent: 'center',}}>
              <TouchableOpacity style={{width:30,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>
              <TouchableOpacity style={{width:6,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>
              <TouchableOpacity style={{width:6,borderRadius:3,backgroundColor:'#2862F8',marginRight:10}}/>     
            </View>
            <TouchableOpacity style={styles.createroundButton} onPress={()=>navigation.navigate('SeedPhrase')}>
            <Text style = {styles.createbutton} >
              Get Started
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
    },
  remindButton:{
    marginTop:30,
    textDecorationLine:'Underline',
    color:'#2862F8',
  },
  description:{
    marginTop:50,
    color:'#A5AEC6',
    fontFamily:'Roboto',
    fontSize:14,
    textAlign:'center'
    
  },
    
});