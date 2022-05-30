import React from 'react';
import { StyleSheet,View, Image, TouchableOpacity,Text,Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

const spinValue = new Animated.Value(0);
export default function Welcome() {

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
    <Text style={styles.welcomeText}>Welcome To
    </Text>
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
        style={styles.box} >
        <Image source={require('../assets/DAPPPLAYSTORE.png')} />
        </LinearGradient>
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
      <Text style={styles.textDescription}>Trusted by millions, Metamask is a secure wallet, making the world of web3 accessible to all
      </Text>
      <View style={styles.fixCenter}>
      <TouchableOpacity style={styles.roundButton}>
          <Text style = {styles.button}>
            Get Started
            </Text>
            <Image source={require('../assets/Vector-forward.png')}></Image>
        </TouchableOpacity>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28,
   color: '#464646',
  },
   container: {
    paddingTop: 80,
    paddingHorizontal:30
    },
  box: {
    width: '100%',
    height: 120,
    marginTop:48,
    borderRadius:30,
    justifyContent: "center",
    alignItems: "center",
    },
  boxRound: {
    position:'absolute',
    width: 150,
    height: 150,
    borderRadius:75, 
    justifyContent: "center",
    alignItems: "center",},

  textDescription:{
    marginTop:80,
    textAlign: 'center',
    color: '#A5AEC6'
    },
  button:{
    color:'white',
    fontFamily:'Roboto',
    fontSize:16,
    marginRight:10,
  },
  roundButton:{
    flexDirection:'row',
    width: 180,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#2862F8',
  },
  fixCenter:{
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoGraphic:{
    marginTop:80,
    justifyContent: "center",
    alignItems: "center",
    }
    
});