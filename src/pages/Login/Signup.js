import React, { Component } from 'react'
import {Text, StyleSheet, View, ImageBackground, TouchableOpacity,ScrollView} from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import cart from "../../assets/cart.png";
import ImageBack from "../../assets/wallpaper.jpg";
import apptronLogo from "../../assets/apptromLogo.png";
import {TextInput,RadioButton} from "react-native-paper";
import DatePicker from 'react-native-datepicker';
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'19/01/12',
            value: 'first',
        }
    }
  render() {
    return (
      <View>
          <View style={{elevation:3,shadowColor:"#000",shadowOpacity:0.3,shadowOffset:{height:3}}} >
              <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'#B0B0B0'} /> }
                      containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                      rightComponent={<Image source={cart} style={{height:20,width:20}}  />}  />
          </View>
          <ImageBackground source={ImageBack} style={{width:'100%',height:"120%",alignItems:"center",justifyContent:"center"}}>
              <ScrollView  style={{width:"90%",height:"200%",backgroundColor:"rgba(0,0,0,0.31)",marginTop:20,paddingRight:20}}>
                  <View style={{width:"100%",height:"25%",alignItems:"center",justifyContent:"center",marginRight:30 ,marginTop:20}}>
                      <Image source={apptronLogo} style={{width:75,height:75,borderRadius:50}}  />
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <TextInput underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"36%",marginLeft:20}}  lable="User Name"  placeholder="First Name" />
                      <TextInput underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"36%",marginLeft:5}}  lable="User Name"  placeholder="Last Name" />
                  </View>
                  <TextInput underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"80%",marginLeft:20}}  lable="User Name"  placeholder="Email" />
                  <TextInput  secureTextEntry={true} underlineColor="#000" selectionColor="#000" mode={'flat'} style={{color:"#000", backgroundColor:'rgba(0,0,0,0)',borderBottomColor:"black",width:"80%",marginLeft:20}}   placeholder="Mobile" />
                  <DatePicker

                      style={{width: 200,borderColor:"white",borderWidth:1,marginLeft:60,marginTop:20 }}
                      mode="date"
                      date={this.state.date}
                      placeholder="select date"
                      format="DD/MM/YY"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                          dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                          },
                          dateInput: {
                              marginLeft: 36
                          }
                          // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {this.setState({date: date})}}
                  />
                  <Text style={{marginLeft:20}}>
                      Select Gender
                  </Text>
                  <RadioButton.Group
                      onValueChange={value => this.setState({ value })}
                      value={this.state.value}
                  >
                    <View style={{flexDirection:'row',marginLeft:20 }}>
                        <RadioButton value={"Male"} color="#f23ad6"/>
                        <Text style={{marginTop:5}}>Male</Text>
                    </View>
                      <View style={{flexDirection:'row',marginLeft:20 }}>
                          <RadioButton value={"Female"} color="#f23ad6"/>
                          <Text style={{marginTop:5}}>Female</Text>
                      </View>
                  </RadioButton.Group>
                  <TouchableOpacity  style={{marginBottom:0,marginTop:20,height:100}} onPress={console.log('1')}>
                      <View style={{height:40,width:150,alignItems:"center",justifyContent:"center",backgroundColor:'#B0B0B0' ,borderRadius:20,marginLeft:70}}><Text style={{color:"white"}}>LOGIN</Text></View>
                  </TouchableOpacity>
              </ScrollView>

          </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
