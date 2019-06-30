import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import styles from "./styles/GradientStyle"

export default class GameInfoScreen extends Component {

  onBackButtonPressed = () => {
    this.props.navigation.push('Home');
  };

  render() {
    return (
      <LinearGradient colors={['#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871']} style={styles.container}
                      start={{x: 1, y: 1}} end={{x: 0, y: 0}}>
        <Text style={styles.welcome}>Game Info</Text>
        <View style={styles.buttonView}>
          <Text style={styles.button} onPress={this.onBackButtonPressed}>Back</Text>
        </View>
      </LinearGradient>
    );
  }

}
