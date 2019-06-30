import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import CVCell from '../components/CVListCellComponent'
import {addAmount} from "../reducers/GameAction";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class GameScreenCV extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}} >
                <FlatList
                  data={this.state.list}
                  renderItem={({item}) => <CVCell item={item}/>}
                />
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addAmount,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { game } = state;
  return { game }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenCV);
