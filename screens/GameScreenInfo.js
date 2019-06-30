import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAmount } from '../reducers/GameAction'
import ListComponent from '../components/ProjectListCellComponent'

class GameScreenInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slidersBackend: {},
            slidersFrontend: {}
        }
    }

    showQRScreen = () => {
        this.props.navigation.push('QR')
    }

    nextRound = () => {
        console.log("nextRound");
        this.props.addAmount(500);
    }

    valueBackendDidChange = (item, value) => {

        this.setState({
            slidersBackend: {
                ...this.state.slidersBackend,
                [item.getId()]: value
            }
        });

    }

    valueFronendDidChange = (item, value) => {

        this.setState({
            slidersFrontend: {
                ...this.state.sliders,
                [item.getId()]: value
            }
        });

    }

    render() {
        return(
            <SafeAreaView style={{flex: 1, flexDirection: 'col'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, height: 70}} >
                        <Text style={styles.amount}>{this.props.game.balance}$</Text>
                    </View>
                    <View style={styles.buttonView}> 
                        <Text style={styles.button} onPress={this.showQRScreen}>QR</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.props.game.projects}
                        renderItem={
                          ({item}) => <ListComponent 
                            item={item} 
                            valueBackendDidChange={this.valueBackendDidChange} 
                            valueFronendDidChange={this.valueFronendDidChange}
                          />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.buttonView2}> 
                        <Text style={styles.button} onPress={this.nextRound}>Next round</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    amount: {
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

  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addAmount,
    }, dispatch)
  );

  const mapStateToProps = (state) => {
    const { game } = state;
    return { game }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GameScreenInfo);
