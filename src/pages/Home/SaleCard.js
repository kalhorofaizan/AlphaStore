import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions } from 'react-native'
import sale  from '../../assets/sale.jpg'

export default  SaleCard =()=>{
    return (
        <View   >
            <Image source={sale} style={styles.SaleImage} />
            <View  style={styles.bottom}>
                <Text style={styles.text} >Summer Sale</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    SaleImage:{
        height:180,
        width:Dimensions.get('window').width
    },
    bottom:{
        alignItems:"center",
        height: 40,
        backgroundColor:'gray',

    },
    text:{
        textAlign: 'center',
        marginTop:10,
        fontWeight:"600",
        color:'white'
    }
});
