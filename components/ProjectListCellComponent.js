import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from "react-native-slider";
import Swipeout from 'react-native-swipeout';

export default class ProjectListCellComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swipeout right={[
        {
          text: 'Delete',
          backgroundColor: 'red',
          onPress: this.props.onPressDelete
        }
      ]
      } style={styles.swipeout}>
        <View style={styles.cell}>
          <Text style={styles.name}>{this.props.item.getName()}</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20
          }}>
            <View style={{flexDirection: 'col'}}>
              <Text style={styles.statText}>Backend</Text>
              <Text style={styles.statText}>
                {this.props.item.getBackendProgress()}/{this.props.item.getBackendPowerRequired()}
              </Text>
            </View>
            <View style={{flexDirection: 'col'}}>
              <Text style={styles.statText}>Frontend</Text>
              <Text style={styles.statText}>
                {this.props.item.getFrontendProgress()}/{this.props.item.getFrontendPowerRequired()}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.statSliderText}>Backend Allocation</Text>
            <Slider style={styles.sliderStyle} onSlidingComplete={
              (value) => {
                this.props.valueBackendDidChange(this.props.item, value)
              }
            }>
            </Slider>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.statSliderText}>Frontend Allocation</Text>
            <Slider style={styles.sliderStyle} onSlidingComplete={
              (value) => {
                this.props.valueFrontendDidChange(this.props.item, value)
              }
            }>
            </Slider>
          </View>
        </View>
      </Swipeout>
    )
  }

}

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: 'transparent'
  },
  sliderStyle: {
    marginLeft: 20.0,
    marginRight: 20.0
  },
  cell: {
    //height: 300
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
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
