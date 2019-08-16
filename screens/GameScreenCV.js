import React, {Component} from 'react';
import {SafeAreaView, FlatList, Alert} from 'react-native';
import CVCell from '../components/CVListCellComponent'
import {addBalance} from "../reducers/GameAction";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {LinearGradient} from 'expo-linear-gradient'

class GameScreenCV extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient colors={['#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871']} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={this.props.player.developers}
            renderItem={({item}) =>
              <CVCell
                onPressDelete={() => {
                  console.log("delete id: " + item.getId());
                  // todo: handle delete project confirmation
                  Alert.alert(
                    'Delete project confirm',
                    'Project will be permanently deleted',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
                }}
                item={item}/>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addAmount: addBalance,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const {player} = state;
  return {player}
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenCV);
