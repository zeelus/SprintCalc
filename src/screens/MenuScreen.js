/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export default class App extends Component {

  static navigationOptions = {
    title: 'Welcome SprintCalc',
  };

  onButtonPressed = () => {
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome SprintCalc</Text>
        <Button style={styles.startButton} title="StartGame" onPress={this.onButtonPressed} />
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
    textAlign: 'center',
    margin: 10,
  },
  startButton: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
