/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';


export default class App extends Component {

  static navigationOptions = {
    title: 'Welcome SprintCalc',
  };

  onButtonPressed = () => {
    this.props.navigation.push('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button color="#140F2D" title="Start Game"  onPress={this.onButtonPressed} />
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D72638',
    margin: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonView: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F88C5',
    borderRadius: 40
  }
});
