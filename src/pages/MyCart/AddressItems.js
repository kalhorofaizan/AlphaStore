import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import add from '../../assets/add.png';
import X from '../../assets/X.png';
import item from '../../assets/item.jpg';
import {TextInput} from "react-native-paper";


export default class AddressItems extends Component {
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
                <View >
                    <View style={{marginTop:10}}>
                        <Text style={[styles.textStyle,{marginTop:0}]} >Address line one </Text>
                        <Text style={[styles.textStyle]}>Address line two</Text>
                        <Text  style={[styles.textStyle]} >Address line three</Text>
                        <Text  style={[styles.textStyle]} >Address line four</Text>
                        <Text  style={[styles.textStyle]} >Address line five</Text>
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
        marginTop:8,
        marginLeft:10
    }
});
