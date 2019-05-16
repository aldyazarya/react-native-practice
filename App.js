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
      <View style={styles.parent}>
        <View style={{backgroundColor:'#1256e3', width: '100%', height: 100, borderRadius: 5, flexDirection: 'row', padding: 10, marginBottom: 10, position: 'relative'}}>
          <View style={{backgroundColor:'#22e1e9', width: 20, height: 20, borderRadius: 100, position: 'absolute', right: -10, top: -10}}></View>

        </View>
        <View style={[
          {backgroundColor:'#b5d445', marginLeft: 0, justifyContent: 'center', alignItems: 'center'},
          styles.box]}>
          <Text>CENTER</Text>
        </View>
        <View style={[{backgroundColor:'#32bf41'},
          styles.box]}></View>
        <View style={[{backgroundColor:'#27b3bd', marginRight: 0},
          styles.box]}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor:'white', 
    flexDirection: 'row', 
    paddingTop: 8, 
    flex: 1, 
    flexWrap: 'wrap', 
    paddingHorizontal: 14
  },
  box: {
    flex: 1, 
    height: 100,
    marginHorizontal: 4,
    borderRadius:5

  }
});
