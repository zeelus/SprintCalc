import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from "react-native-slider";


export default class ProjectListCellComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.cell}>
                <Text style={styles.name}>{this.props.item.name}</Text>
                <Text style={styles.subname}>{this.props.item.subname}</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statText}>Stat1:</Text>
                        <Text style={styles.statText}>200</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statText}>Stat2:</Text>
                        <Text style={styles.statText}>20</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statText}>Stat3:</Text>
                        <Text style={styles.statText}>300</Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cell: {
        marginTop: 20
    },
    name: {
        fontFamily: 'Roboto-Italic',
        fontSize: 35,
        textAlign: 'center',
        justifyContent: 'center'
    },
    subname: {
        fontFamily: 'Roboto-Regular',
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center'
    },
    statText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20
    },
    statSliderText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        textAlign: 'center',
    }

})