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
          <Button color="#FFFFFF" title="Start Game"  onPress={this.onButtonPressed} />
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
    backgroundColor: '#D6D617',
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
    backgroundColor: '#B2CEDE',
    borderRadius: 40
  }
});
