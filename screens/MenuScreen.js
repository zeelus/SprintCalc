import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import styles from "./styles/GradientStyle"

export default class App extends Component {

  onStartGameButtonPressed = () => {
    this.props.navigation.push('Game');
  };

  onGameInfoButtonPressed = () => {
    this.props.navigation.push('Info');
  };

  render() {
    return (
      <LinearGradient colors={['#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871']} style={styles.container} start={{x: 1, y:1}} end={{x: 0, y:0}} >
        <Text style={styles.welcome}>SprintCalc</Text>
        <View style={styles.buttonView}>
          <Text style={styles.button} onPress={this.onStartGameButtonPressed}>Start Game</Text>
        </View>
        <View style={styles.buttonView2}>
          <Text style={styles.button} onPress={this.onGameInfoButtonPressed}>Game info</Text>
        </View>
      </LinearGradient>
    );
  }
  
}