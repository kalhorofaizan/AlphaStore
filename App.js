/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,SafeAreaView,ScrollView ,View,TouchableOpacity,Button} from 'react-native';
import {createDrawerNavigator,createAppContainer,DrawerItems} from 'react-navigation'
import Home from  './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Shop from './src/pages/shop/Shop';
import MyOrder from './src/pages/myOrder/MyOrder';
import MyWishList from './src/pages/MyWishList/MyWishList';
import MyCart from './src/pages/MyCart/MyCart';

const CustomeDrowerComponent =(props)=>(
    <SafeAreaView style={{flex:1}} >
      <ScrollView>
        <DrawerItems  {...props} />
      </ScrollView>
    </SafeAreaView>
);

const AppDrowerNavigation = createDrawerNavigator({
  Home:Home,
  Login:Login,
  MyCart:MyCart,
  Men:Shop,
  Woman:Shop,
  MyOrder:MyOrder,
  MyWishList:MyWishList
},{
  contentComponent:CustomeDrowerComponent,
});

export default createAppContainer(AppDrowerNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
