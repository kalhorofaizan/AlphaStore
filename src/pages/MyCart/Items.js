import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import add from '../../assets/add.png';
import X from '../../assets/X.png';
import item from '../../assets/item.jpg';
import {TextInput} from "react-native-paper";


export default class Items extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View style={{backgroundColor:'white'}} >
        <View style={{backgroundColor:'#D3D3D3',flexDirection:'row-reverse'}}>
            <Image source={X} style={{width:20,height:20,marginRight:8,marginTop:2,marginBottom:2}} />
            <Image source={add} style={{width:20,height:20,marginRight:15,marginTop:2,marginBottom:2}} />
        </View>
          <View style={{flexDirection:'row'}}>
              <Image source={item} style={{width:150,height:150,marginRight:5,marginTop:10,marginLeft:2}} />
              <View style={{marginTop:10}}>
                  <Text style={[styles.textStyle,{marginTop:0}]} >Hair Brush and Other</Text>
                  <Text style={[styles.textStyle]}>Price(Rs):  11.92</Text>
                  <TextInput  underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:100,marginTop:8}}  lable="User Name"  placeholder="AET" />
                  <Text  style={[styles.textStyle]} >Total Price(Rs):  11.92</Text>
              </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        fontWeight:'600',
        marginTop:8
    }
});
