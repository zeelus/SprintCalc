import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from "react-native-slider";


export default class ProjectListCellComponent extends Component {

  constructor(props) {
    super(props);
  }

  handleDeteleProject = (uuid) => {
    console.log("Delete project UUID: ", uuid)

    
  }

  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.name}>{this.props.item.getName()}</Text>
        <Text style={styles.button} onPress={()=>{
          this.handleDeteleProject(this.props.item.getId());
        }}>Delete</Text>
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
          <Slider>
          </Slider>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.statSliderText}>Frontend Allocation</Text>
          <Slider>
          </Slider>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  cell: {
    //height: 300
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
