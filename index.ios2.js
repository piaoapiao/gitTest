/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// add 1

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FirstReact extends Component {
  render() {
    return (
      <View style={styles.container} >

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        
        


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstReact', () => FirstReact);

11111
22222
33333


