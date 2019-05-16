/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // //View itu seperti tag <div></div>
      // <View style={styles.container}> 
      //   {/* Text itu seperti tag <p></p> */}
      //   <Text style={styles.welcome}>Welcome to First Project!</Text>
      //   <Text style={styles.instructions}>Aldy Azarya</Text>
      // </View>
      //di react native displaynya selalu flex= tersusun kebawah
      <View style={{backgroundColor:'white', flexDirection: 'row', paddingTop: 8, alignItems: 'flex-start'}}>
        <View style={{backgroundColor:'#1256e3', flex: 1, height: 100, marginHorizontal: 4, marginLeft: 8, borderRadius:10, flexDirection: 'row', padding: 10}}>
          <View style={{backgroundColor:'#22e1e9', flex: 1, marginHorizontal: 4,}}></View>
          <View style={{backgroundColor:'#22e1e9', flex: 1, marginHorizontal: 4,}}></View>
          <View style={{backgroundColor:'#22e1e9', flex: 1, marginHorizontal: 4,}}></View>
        </View>
        <View style={{backgroundColor:'#b5d445', flex: 1, height: 90, marginHorizontal: 4, borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
          <Text>CENTER</Text>
        </View>
        <View style={{backgroundColor:'#32bf41', flex: 1, height: 80, marginHorizontal: 4, borderRadius:10}}></View>
        <View style={{backgroundColor:'#27b3bd', flex: 1, height: 70, marginHorizontal: 4, marginRight: 8, borderRadius:10}}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
