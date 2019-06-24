import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


export default class App extends Component {

  onButtonPressed = () => {
    this.props.navigation.push('Game')
  }

  render() {
    return (
      <LinearGradient colors={['#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871']} style={styles.container} start={{x: 1, y:1}} end={{x: 0, y:0}} >
        <Text style={styles.welcome}>SprintCalc</Text>
        <View style={styles.buttonView}>
          <Text style={styles.button} onPress={this.onButtonPressed} >Start Game</Text>
        </View>
        <View style={styles.buttonView2}>
          <Text style={styles.button}>Game info</Text>
        </View>
      </LinearGradient>
    );
  }
  
}

const styles = StyleSheet.create({
  welcome: {
    position: 'absolute',
    top: 50,
    fontSize: 50,
    fontStyle: 'italic',
    fontFamily: 'Roboto-Italic',
    color: "#FFFFFF"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  button: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: 'Roboto-Regular'
  },
  buttonView: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#00C9A7',
    borderRadius: 30,
    margin: 10
  },
  buttonView2: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#845EC2',
    borderRadius: 30,
    margin: 10
  }
});
