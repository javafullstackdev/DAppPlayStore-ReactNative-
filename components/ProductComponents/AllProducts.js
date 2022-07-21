import React from 'react';
import { StyleSheet,View, Image, Text, TouchableOpacity} from 'react-native';
export default function AllProducts({navigation}) {  
  

  return (

    <View style={styles.background}>
      <View style={{ flexDirection:'row', margin:20}}>
        <View style={{'flex-grow':'1'}} >
          <Text style={{color:'#7978B6',fontFamily:'Roboto',}}>Welcome Back</Text>
          <Text style={styles.userName}>Micheal Clarke</Text>
        </View>
        <Image  source={require('../../assets/images/userAvatar.png')} />
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
        <View style={styles.navigationPanel}>
          <TouchableOpacity>
            <Image  style={styles.navigationImage} source={require('../../assets/images/AllProduct.png')} />
          </TouchableOpacity>        
          <Text style={styles.navItemText}>All</Text>
        </View>

        <View style={styles.navigationPanel}>
          <TouchableOpacity>
              <Image  style={styles.navigationImage} source={require('../../assets/images/Games.png')} />
          </TouchableOpacity>
          <Text style={styles.navItemText}>Kids</Text>
        </View>

        <View style={styles.navigationPanel}>
          <TouchableOpacity>
              <Image  style={styles.navigationImage} source={require('../../assets/images/Kids.png')} />
          </TouchableOpacity>
          <Text style={styles.navItemText}>Games</Text>
        </View>

        <View style={styles.navigationPanel}>
          <TouchableOpacity>
              <Image  style={styles.navigationImage} source={require('../../assets/images/Social.png')} />
          </TouchableOpacity>
          <Text style={styles.navItemText}>Social</Text>
        </View>

        <View style={styles.navigationPanel}>
          <TouchableOpacity>
            <Image  style={styles.navigationImage} source={require('../../assets/images/Top.png')} />
          </TouchableOpacity>
          <Text style={styles.navItemText}>Top</Text>
        </View>
      </View>
<View style={{position:'absolute', bottom:0}}>
    <View style={{flexDirection:'row', marginRight:20, marginLeft:20,marginBottom:10, position:'relative', width:'100%'}}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center', width:200}}>
      <TouchableOpacity>
        <Image  source={require('../../assets/images/Home.png')} />
      </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity>
        <Image   source={require('../../assets/images/search.png')} />
      </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity>
        <Image  source={require('../../assets/images/play.png')} />
      </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity>
        <Image   source={require('../../assets/images/book.png')} />
      </TouchableOpacity>
      </View>
    </View>
  </View>

  </View>
  
      
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop:0,
    paddingHorizontal: 0,
    flex:1
  },
  userName:{
    fontFamily:'Roboto',
    fontWeight:'500',
    fontSize:16,
    marginTop:10
    
  },
  navigationPanel:{
    marginLeft:20,
    alignItems:'center',

  },
  navItemText:{
    marginTop:5
  },
  navigationImage:{
    width:40,
    height:40,
    resizeMode:'contain',
    borderRadius:20,
    
  },

});