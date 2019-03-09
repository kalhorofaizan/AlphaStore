import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";

export default  HeaderTop =()=>{
    return (
        <View style={{elevation:3,shadowColor:"#000",shadowOpacity:0.3,shadowOffset:{height:3}}} >
            <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'gray'} /> }
                    containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                    rightComponent={<Image source={cart} style={{height:20,width:20}}  />}  />
        </View>
    )
}



const styles = StyleSheet.create({});
