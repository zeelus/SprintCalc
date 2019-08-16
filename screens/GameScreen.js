import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {nextRound, removeProject} from '../reducers/GameAction'
import ListComponent from '../components/ProjectListCellComponent'
import {Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

class GameScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slidersBackend: {},
      slidersFrontend: {}
    }
  }

  showQRScreen = () => {
    this.props.navigation.push('QR')
  };

  nextRound = () => {
    console.log("nextRound: " + this.props.player.round);

    this.props.next();

    console.log(JSON.stringify(this.state.slidersBackend));
    console.log(JSON.stringify(this.state.slidersFrontend));

    Object.entries(this.state.slidersBackend)
      .forEach(([key, value]) => console.log(" => ", {[key]: value}));
    Object.entries(this.state.slidersFrontend)
      .forEach(([key, value]) => console.log(" => ", {[key]: value}));
  };

  valueBackendDidChange = (item, value) => {
    console.log("valueBackendDidChange: ", {[item.getId()]: value});

    this.setState({
      slidersBackend: {
        ...this.state.slidersBackend,
        [item.getId()]: value
      }
    });
  };

  valueFrontendDidChange = (item, value) => {
    console.log("valueFrontendDidChange: ", {[item.getId()]: value});

    this.setState({
      slidersFrontend: {
        ...this.state.slidersFrontend,
        [item.getId()]: value
      }
    });
  };

  render() {
    return (
      <LinearGradient colors={['#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, flexDirection: 'col'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, height: 70, width: 30}}>
            <Text style={styles.amount}>{this.props.player.round}</Text>
          </View>
          <View style={{flex: 2, height: 70}}>
            <Text style={styles.amount}>{this.props.player.balance}$</Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.button} onPress={this.showQRScreen}>QR</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={this.props.player.projects}
            renderItem={
              ({item}) => <ListComponent
                item={item}
                valueBackendDidChange={this.valueBackendDidChange}
                valueFrontendDidChange={this.valueFrontendDidChange}
                onPressDelete={() => {
                  console.log("delete id: " + item.getId());
                  const project = this.props.player.projects.find((e) => e.getId() === item.getId());
                  Alert.alert(
                    `Do you want to remove project ${project.getName()}`,
                    `Project will ben deleted permanently`,
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      }, {
                        text: 'OK',
                        onPress: () => {
                          console.log('OK Pressed');
                          this.props.removeProj(project);
                        }
                      },
                    ],
                    {cancelable: false},
                  );
                }}
              />
            }
            contentInset={{bottom:49}}
            automaticallyAdjustContentInsets={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.buttonView2}>
            <Text style={styles.button} onPress={this.nextRound}>Next round</Text>
          </View>
        </View>
      </SafeAreaView>
      </LinearGradient>
      
    )
  }
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 50,
    fontStyle: 'italic',
    fontFamily: 'Roboto-Italic',
    color: '#FFFFFF',
    alignItems: 'flex-start',
    margin: 5
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
    width: 60,
    height: 60,
    backgroundColor: '#00C9A7',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5
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
    next: nextRound,
    removeProj: removeProject
  }, dispatch)
);

const mapStateToProps = (state) => {
  const {player} = state;
  return {player}
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
