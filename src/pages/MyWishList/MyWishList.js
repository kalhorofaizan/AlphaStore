import React, { Component } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";
import WishItems from "./WishItems";


export default class MyWishList extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
          <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'#B0B0B0'} /> }
                  containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                  rightComponent={  <Image source={cart} style={{height:20,width:20}}  />}  />
          <ScrollView>
              <WishItems/>
              <WishItems/>
              <WishItems/>
              <WishItems/>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
