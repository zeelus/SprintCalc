import { createStackNavigator, createAppContainer } from 'react-navigation';
import MenuScreen from './screens/MenuScreen';
import GameScreen from './screens/GameScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: MenuScreen },
  Game: { screen: GameScreen }
},   
{
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);