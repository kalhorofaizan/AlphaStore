import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import item from '../../assets/item.jpg';


export default class ShopItems extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View  style={{flexDirection:'row',backgroundColor:'#D3D3D3'}}>
          <View style={{height:210,width:150,backgroundColor:'white',marginLeft:20,marginRight:20 ,marginTop:10}}>
              <View style={{width:150,height:20}}>

              </View>
              <Image style={{height:150,width:150}} source={item}  />
              <Text style={{height:90,width:150,fontWeight:"500",alignSelf:'center',marginTop:2}}>Bermuda Shorts By Armani</Text>
          </View>
          <View style={{height:210,width:150,backgroundColor:'white',marginLeft:20 ,marginTop:10}}>
              <View style={{width:150,height:20}}>

              </View>
              <Image style={{height:150,width:150}} source={item}  />
              <Text style={{height:90,width:150,fontWeight:"500",alignSelf:'center',marginTop:2}}>Bermuda Shorts By Armani</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
