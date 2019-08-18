import * as React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDeveloper, addProject} from '../reducers/GameAction'

export class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  };

  render() {
    const {hasCameraPermission, scanned} = this.state;

    if (hasCameraPermission === null) {
      return (
        <SafeAreaView>
          <Text>Requesting for camera permission</Text>
        </SafeAreaView>
      );
    }
    if (hasCameraPermission === false) {
      return (
        <SafeAreaView>
          <Text>No access to camera</Text>
        </SafeAreaView>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {
          scanned &&
          (<Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned: false})}/>)
        }
      </View>
    );
  }

  findProject = (uuid) => {
    return this.props.game.projects.findIndex((e) => e.getId() === uuid);
  };

  findDeveloper = (uuid) => {
    return this.props.game.developers.findIndex((e) => e.getId() === uuid);
  };

  findEvent = (uuid) => {
    return this.props.game.events.findIndex((e) => e.getId() === uuid);
  };

  handleBarCodeScanned = ({type, data}) => {
    this.setState({scanned: true});
    this.props.navigation.goBack();

    const projectIndex = this.findProject(data);
    if (projectIndex !== -1) {
      const project = this.props.game.projects[projectIndex];
      Alert.alert(
        `Do you want to add project: ${project.getName()}?`,
        `Statistics:\n
        Backend: ${project.getBackendPowerRequired()}\n
        Fronted: ${project.getFrontendPowerRequired()}\n
        Income: ${project.getIncome()}\n
        Duration: ${project.getDuration()}`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }, {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed: Adding Project...');
              this.props.addProj(project);

            }},
        ],
        {cancelable: false},
      );
      return;
    }

    const developerIndex = this.findDeveloper(data);
    if (developerIndex !== -1) {
      const developer = this.props.game.developers[developerIndex];
      Alert.alert(
        `Do you want to add a new developer: ${developer.getName()} ${developer.getLastName()}?`,
        `Statistics:\n
        Backend: ${developer.getBackendPower()}\n
        Frontend: ${developer.getFrontendPower()}\n
        Cost: $${developer.getCost()}/tour`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }, {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed: Adding Developer...');
              this.props.addDev(developer);
            }},
        ],
        {cancelable: false},
      );
      return;
    }

    const eventIndex = this.findEvent(data);
    if (eventIndex !== -1) {
      const event = this.props.game.events[eventIndex];
      return;
    }
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addDev: addDeveloper,
    addProj: addProject
  }, dispatch)
);

const mapStateToProps = (state) => {
  const {player, game} = state;
  return {player, game}
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScanner);
