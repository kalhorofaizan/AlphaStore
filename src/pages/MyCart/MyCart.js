import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView,TouchableOpacity} from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";
import Items from "./Items";

export default class MyCart extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
          <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'#B0B0B0'} /> }
                  containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                  rightComponent={<Image source={cart} style={{height:20,width:20}}  />}  />
                 <ScrollView style={{height:407.6}} >
                     <Items/>
                     <Items/>
                     <Items/>
                     <Items/>
                     <Items/>
                 </ScrollView>
          <View style={{alignItems:'flex-end',height:80,backgroundColor:"#D3D3D3"}} >
              <Text style={styles.textStyle} >Total Price(Rs):1306.00</Text>
              <Text style={styles.textStyle}>Discount:0.00</Text>
              <Text style={styles.textStyle}>Grand Price(Rs):1426.00</Text>
          </View>
          <TouchableOpacity style={{height:30,alignItems:"center",backgroundColor:'black'}} onPress={()=>{this.props.navigation.navigate('Address1')}} >
              <Text style={[styles.textStyle,{color:'white'}]}>Place Order</Text>
          </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        fontWeight:'600',
        marginRight:20,
        marginTop: 5
    }
});
