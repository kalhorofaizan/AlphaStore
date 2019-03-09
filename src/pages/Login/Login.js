import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground } from 'react-native'
import ImageBack from '../../assets/wallpaper.jpg'
import {Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";
export default class Login extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
          <View style={{elevation:3,shadowColor:"#000",shadowOpacity:0.3,shadowOffset:{height:3}}} >
              <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'#B0B0B0'} /> }
                      containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                      rightComponent={<Image source={cart} style={{height:20,width:20}}  />}  />
          </View>
        <ImageBackground source={ImageBack} style={{width:'100%',height:"90%",alignItems:"center",justifyContent:"center"}}>
            <View  style={{width:"90%",height:"90%",backgroundColor:"rgba(0,0,0,0.31)"}}>

            </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
