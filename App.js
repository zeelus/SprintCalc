import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MenuScreen from './screens/MenuScreen';
import GameInfoScreen from './screens/GameInfoScreen';
import GameScreen from './screens/GameScreen';
import QR from './screens/QRScreen'
import friendReducer from './reducers/GameReducer'

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const AppNavigator = createStackNavigator({
  Home: { screen: MenuScreen },
  Info: { screen: GameInfoScreen},
  Game: { screen: GameScreen },
  QR: { screen: QR }
},   
{
  mode: 'modal',
  headerMode: 'none',
});

const store = createStore(friendReducer);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => {
          console.log("finished loading");
          // prepare game logic objects: EventsRepository, ProjectsRepository and DevelopersRepository
          handleFinishLoading(setLoadingComplete);
        }}
      />
    );
  } else {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigatorContainer />
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
    ]),
    Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Italic': require('./assets/fonts/Roboto/Roboto-Italic.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  //console.warn(error);
  console.error(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});