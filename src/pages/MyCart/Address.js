import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import AddressItems from "./AddressItems";



export default class Address extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
          <Header  color={"white"} side={20} underlayColor={'#B0B0B0'}
                  containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                   />
          <View style={{backgroundColor:'black',width:"100%",height:50,alignItems:'center',justifyContent:"center"}} >
              <Text style={{color:'white'}} >+ADD ADDRESS</Text>
          </View>
            <ScrollView  style={{height:420}} >
                <AddressItems/>
                <AddressItems/>
                <AddressItems/>
                <AddressItems/>
            </ScrollView>
          <View style={{backgroundColor:'black',width:"100%",height:50,alignItems:'center',justifyContent:"center"}} >
              <Text style={{color:'white'}} >PAYMENT</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
