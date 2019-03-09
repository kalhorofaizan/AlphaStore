/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,SafeAreaView,ScrollView ,View,TouchableOpacity,Button,Image} from 'react-native';
import {createDrawerNavigator,createAppContainer,DrawerItems,createStackNavigator,} from 'react-navigation'
import Home from  './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Shop from './src/pages/shop/Shop';
import MyOrder from './src/pages/myOrder/MyOrder';
import MyWishList from './src/pages/MyWishList/MyWishList';
import MyCart from './src/pages/MyCart/MyCart';
import Sighup from './src/pages/Login/Signup';
import Forget from './src/pages/Login/Forget';
import Address from './src/pages/MyCart/Address';
import Logo from './src/assets/apptromLogo.png';
import home from './src/assets/home.png';
import female from './src/assets/female.png';
import man from './src/assets/man.png';
import cart from './src/assets/cart.png';
import user from './src/assets/user.png';
import menu from './src/assets/menu.png';
import heart from './src/assets/heart.png';



const CustomeDrowerComponent =(props)=>(
    <SafeAreaView style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}} forceInsert={{top:'always',horizontal:'never'}} >
        <View style={{height:180,alignItems:'center' }}>
                <Image source={Logo} style={{height:100,width:100,borderRadius:50,}}  />
                <Text style={{color:'white',marginTop:6}}  >Ecommerce</Text>
            <Text style={{color: "white",marginTop:6}} >info@ecommerce.com</Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    width:250,
                    marginTop:6
                }}
            />
        </View>
      <ScrollView   >
              <DrawerItems   {...props} activeTintColor='#fff'   inactiveTintColor='#fff' style={{height:30}} labelStyle={{marginHorizontal:0,marginVertical:10}} />
      </ScrollView>
    </SafeAreaView>
);

const AppStackNavigater=createStackNavigator({
   Home1:{
       screen:Home,
       navigationOptions:{
           header:null
       }
   },
    Shop:{
       screen:Shop,
        navigationOptions:{
            header:null
        }
    },
});

const LoginStackNavigater=createStackNavigator({
    Login1:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    SignUp:{
        screen:Sighup,
        navigationOptions:{
            header:null
        }
    },
    Forget:{
        screen:Forget,
        navigationOptions:{
            header:null
        }
    },
});
const MyCartStackNavigater=createStackNavigator({
    MyCart:{
        screen:MyCart,
        navigationOptions:{
            header:null
        }
    },
    Address1:{
        screen:Address,
        navigationOptions:{
            header:null
        }
    },
});




const AppDrowerNavigation = createDrawerNavigator({
  Home:{screen:AppStackNavigater,
      navigationOptions:{
      drawerLabel:"Home",
      drawerIcon:({tintColor})=>(
          <Image  source={home}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
      )
      }},
  Login:{screen:LoginStackNavigater,
      navigationOptions:{
          drawerLabel:"Login",
          drawerIcon:({tintColor})=>(
              <Image  source={user}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }},
  MyCart:{screen:MyCartStackNavigater,
      navigationOptions:{
          drawerLabel:"My Cart",
          drawerIcon:({tintColor})=>(
              <Image  source={cart}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }},
  Men:{screen:Shop,
      navigationOptions:{
          drawerLabel:"Men",
          drawerIcon:({tintColor})=>(
              <Image  source={man}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }},
  Woman:{screen:Shop,
      navigationOptions:{
          drawerLabel:"Woman",
          drawerIcon:({tintColor})=>(
              <Image  source={female}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }},
  MyOrder:{screen:MyOrder,
      navigationOptions:{
          drawerLabel:"My Order",
          drawerIcon:({tintColor})=>(
              <Image  source={menu}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }},
  MyWishList:{screen:MyWishList,
      navigationOptions:{
          drawerLabel:"My Wish List",
          drawerIcon:({tintColor})=>(
              <Image  source={heart}  resizeMode='contain' style={{ width: 25, height: 25, tintColor: tintColor }}  />
          )
      }}
},{
  contentComponent:CustomeDrowerComponent,
    drawerBackgroundColor: "transparent ",
});

export default createAppContainer(AppDrowerNavigation);

