import React, { Component } from 'react'
import {Text, StyleSheet, View, Button,TouchableOpacity,ScrollView} from 'react-native'
import {Header, Image,Icon} from "react-native-elements"
import cart from '../../assets/cart.png'
import arrow from '../../assets/arrow.png'
import SaleCard from "./SaleCard";
import {createStackNavigator,createAppContainer} from "react-navigation";
import Shop from "../shop/Shop";
// import menu from '../../assets/burgermenu.png'


export default class Home extends Component {
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
          <ScrollView >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shop")}><SaleCard /></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shop")}><SaleCard /></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shop")}><SaleCard /></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Shop")}><SaleCard /></TouchableOpacity>
          </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({});
