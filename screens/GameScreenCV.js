import React, {Component} from 'react';
import {SafeAreaView, FlatList, Alert, View} from 'react-native';
import CVCell from '../components/CVListCellComponent'
import {removeDeveloper} from "../reducers/GameAction";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class GameScreenCV extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#9d5ec2'}}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={this.props.player.developers}
            renderItem={({item}) =>
              <CVCell
                onPressDelete={() => {
                  console.log("delete id: " + item.getId());
                  const developer = this.props.player.developers.find((e) => e.getId() === item.getId());
                  Alert.alert(
                    `Do you want to remove: ${developer.getName()} ${developer.getLastName()}`,
                    `Developer will be removed permanently`,
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      }, {
                        text: 'OK',
                        onPress: () => {
                          console.log('OK Pressed');
                          this.props.removeDev(developer);
                        }
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                item={item}/>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeDev: removeDeveloper,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const {player} = state;
  return {player}
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenCV);
