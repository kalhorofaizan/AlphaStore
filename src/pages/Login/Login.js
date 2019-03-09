import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Button,TouchableOpacity } from 'react-native'
import ImageBack from '../../assets/wallpaper.jpg'
import { Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";
import apptronLogo from '../../assets/apptromLogo.png'
import {TextInput} from 'react-native-paper'

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
            <View  style={{width:"90%",height:"90%",backgroundColor:"rgba(0,0,0,0.31)",alignItems:"center"}}>
                <View style={{width:"100%",height:"25%",alignItems:"center",justifyContent:"center"}}>
                    <Image source={apptronLogo} style={{width:75,height:75,borderRadius:50}}  />
                </View>
                <TextInput underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"80%"}}  lable="User Name"  placeholder="User Name" />
                <TextInput  secureTextEntry={true} underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"80%"}}   placeholder="Password" />
                <View style={{width:"100%",alignItems:"flex-end",marginRight:"20%",height:40,justifyContent:"center",marginBottom:10 }}>
                    <Text style={{color:'blue'}}>Forgot Password</Text>
                </View>
                <TouchableOpacity  style={{marginBottom:10}} onPress={console.log('1')}>
                    <View style={{height:40,width:150,alignItems:"center",justifyContent:"center",backgroundColor:'#B0B0B0' ,borderRadius:20}}><Text style={{color:"white"}}>LOGIN</Text></View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate("SignUp")}>
                    <View style={{height:40,width:150,alignItems:"center",justifyContent:"center",backgroundColor:'#B0B0B0' ,borderRadius:20}}><Text style={{color:"white"}}>REGISTER</Text></View>
                </TouchableOpacity>
            </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
