import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Swipeout from 'react-native-swipeout';

export class ProjectListCellComponent extends Component {

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
        <View>
          <Image
            style={{
              width: 198,
              height: 189,
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            source={{
              uri: this.props.game.imageCache[this.props.item.getImage()]
            }}
          />
        </View>
        <Text style={styles.name}>Name: {this.props.item.getName()}</Text>
        <Text style={styles.name}>Last name: {this.props.item.getLastName()}</Text>
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
      </Swipeout>
    )
  }

}

const mapStateToProps = (state) => {
  const {game} = state;
  return {game}
};

export default connect(mapStateToProps)(ProjectListCellComponent);

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: 'transparent'
  },
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
  },
  image: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
