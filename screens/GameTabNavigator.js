import {createBottomTabNavigator} from 'react-navigation';
import GameScreen from './GameScreen';
import GameScreenCV from './GameScreenCV';

const TabNavigator = createBottomTabNavigator({
  Projects: GameScreen,
  Employees: GameScreenCV
});

export default TabNavigator
