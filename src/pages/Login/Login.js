import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground } from 'react-native'
import ImageBack from '../../assets/wallpaper.jpg'
export default class Login extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
        <ImageBackground source={ImageBack} style={{width:'100%',height:"100%"}}>
            
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
