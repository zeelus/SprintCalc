import React, {Component} from 'react';

import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import CVCell from '../components/CVListCellComponent'

export default class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{key: "A", name: "Jan", subname: "Kowalski"}, {key: "B", name: "Jan", subname: "Kowalski"}, {key: "C", name: "Jan", subname: "Kowalski"},]
        };
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}} >
                <FlatList data={this.state.list} renderItem={({item}) => <CVCell item={item}/>}/>
            </SafeAreaView>
        )
    }
}