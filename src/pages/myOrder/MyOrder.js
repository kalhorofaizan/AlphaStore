import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'
import {Header, Icon, Image} from "react-native-elements";
import arrow from '../../assets/arrow.png';

export default class MyOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
  render() {
    return (
      <View>
          <Header leftComponent={<Icon name={"menu"} onPress={()=>this.props.navigation.openDrawer()} color={"white"} side={20} underlayColor={'#B0B0B0'} /> }
                  containerStyle={{backgroundColor:'gray',justifyContent: 'space-around',marginTop:-30}} centerComponent={<Text style={{color:'white',fontWeight:"400",fontSize:20}}  >Alpha Store</Text>}
                   />
                   <View  style={{backgroundColor:'#B0B0B0',height:45,width:"100%",flexDirection:'row'}}>
                       <View  style={{marginLeft:10,marginTop:2,height:30,width:"80%"}} >
                           <Button title={"10000003"} color={'#B0B0B0'} onPress={()=>this.setState({show:!this.state.show})} />
                       </View  >
                       <Image source={arrow} style={{backgroundColor:"white",height:30,width:30,marginTop:5,marginLeft:10}} />
                   </View>
                            <Text>
                                {this.state.show ? ' Price  29.95 Size: M Color: Red ': ''}
                            </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
