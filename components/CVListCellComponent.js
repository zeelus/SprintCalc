import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ProjectListCellComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.name}>Name: {this.props.item.getName()}</Text>
        <Text style={styles.name}>Last name: {this.props.item.getLastname()}</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20
        }}>
          <View style={{flexDirection: 'col'}}>
            <Text style={styles.statText}>Cost: </Text>
            <Text style={styles.statText}>{this.props.item.getCost()}</Text>
          </View>
          <View style={{flexDirection: 'col'}}>
            <Text style={styles.statText}>Backend: </Text>
            <Text style={styles.statText}>{this.props.item.getBackendPower()}</Text>
          </View>
          <View style={{flexDirection: 'col'}}>
            <Text style={styles.statText}>Frontend: </Text>
            <Text style={styles.statText}>{this.props.item.getFrontendPower()}</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  cell: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  name: {
    fontFamily: 'Roboto-Italic',
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'center',
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
