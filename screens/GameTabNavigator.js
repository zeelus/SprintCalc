import {createBottomTabNavigator} from 'react-navigation';
import GameScreen from './GameScreen';
import GameScreenCV from './GameScreenCV';

const TabNavigator = createBottomTabNavigator({
  Info: GameScreen,
  CVs: GameScreenCV
});

export default TabNavigator
