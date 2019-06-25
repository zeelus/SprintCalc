import React, {Component} from 'react';

import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';

import ListComponent from '../components/ProjectListCellComponent'

export default class GameScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          list: [{key: 'a', name: 'Projekt1', subname: 'Da da da, na na na'}, 
          {key: 'b', name: 'Projekt2', subname: 'Da da da, na na na'}, 
          {key: 'c', name: 'Projekt3', subname: 'Da da da, na na na'},],
        };
    }

    showQRScreen = () => {
        this.props.navigation.push('QR')
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1, flexDirection: 'col'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, height: 70}} >
                        <Text style={styles.amound}>1000$</Text>
                    </View>
                    <View style={styles.buttonView}> 
                        <Text style={styles.button} onPress={this.showQRScreen}>QR</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.list}
                        renderItem={({item}) => <ListComponent item={item} /> }
                    />
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.buttonView2}> 
                        <Text style={styles.button} onPress={this.showQRScreen}>Next round</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    amound: {
      fontSize: 50,
      fontStyle: 'italic',
      fontFamily: 'Roboto-Italic',
      margin: 10
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
      width: 150,
      height: 60,
      backgroundColor: '#00C9A7',
      justifyContent: 'center',
      borderRadius: 30,
      margin: 10
    },
    buttonView2: {
        flex: 1,
        width: 150,
        height: 60,
        backgroundColor: '#00C9A7',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 10
      },
  });