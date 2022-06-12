import * as React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';


export default class FinishWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'Yatra-One': require('../assets/Fonts/boombox2.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>

          <Text style={{ fontFamily: 'Yatra-One', fontSize: 18 }}>DAPP PLAY STORE</Text>
          <Text style={{fontFamily:'Roboto',fontSize:20,fontWeight:550, marginTop:30}}>Help us improve DAPP PLAY STORE</Text>
          <Text style={{ fontFamily: 'Rototo', fontSize: 14,marginTop:10}}>DAPP PLAY STORE would like to gather basic data usage to better understand how our user interact with the mobile app. This data will be used to continually improve the user experience of our product</Text>
          <Text style={{fontWeight:700, fontFamily:'Roboto', marginTop:30}}>DAPP PLAY STORE WILL</Text>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{marginRight:20}} source={require('../assets/check(true).png')}/>
            <Text style={{fontFamily:'Roboto', fontSize:14}}>Always allow you to opt-out via Settings</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{marginRight:20}} source={require('../assets/check(true).png')}/>
            <Text style={{fontFamily:'Roboto', fontSize:14}}>Send anonymized clickss & pageview events</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{marginRight:20}} source={require('../assets/check(false).png')}/>
            <Text style={{fontFamily:'Roboto', fontSize:14}}>Never collects keys, addresses, transactions, balances, hashes, or any personal information</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{marginRight:20}} source={require('../assets/check(false).png')}/>
            <Text style={{fontFamily:'Roboto', fontSize:14}}>Always Never collect your IP Address</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{marginRight:20}} source={require('../assets/check(false).png')}/>
            <Text style={{fontFamily:'Roboto', fontSize:14}}>Never sell data for profit. Ever!
</Text>
          </View>
          <Text style={{fontSize:14,fontFamily:'Roboto',color:'#A5AEC6', marginTop:50}}>This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation [EU] 2016 679. FOr more information in relation to our Privacy practices, please see out Privacy Policy Here<Text style={{color:'#2862F8', textDecorationLine:'underline'}}>Here</Text> </Text>

          <View style={{flexDirection:'row',marginTop:100}}>
            <View style={{width:'50%'}}>
              <TouchableOpacity style={styles.textButton1} onPress={()=>this.props.navigation.goBack()}>
                <Text style={{fontFamily:'Roboto', fontSize:14,color:'#2862F8'}}>No Thanks</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'50%'}}>
              <TouchableOpacity style={styles.textButton2}>
                <Text style={{fontFamily:'Roboto', fontSize:14,color:'white'}}>I Agree</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    margin:30
  } ,
  textButton1:{
    height:44,
    borderRadius:10,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#EDF7FD'
  },
  textButton2:{

    height:44,
    borderRadius:10,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#2862F8'
  }
  });