import React, { Component } from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'

export default class Home extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
          <Button  onPress={()=>this.props.navigation.openDrawer()}  title={'botton'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({});
