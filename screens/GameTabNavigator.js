import {createBottomTabNavigator} from 'react-navigation';
import GameScreenInfo from './GameScreenInfo';
import GameScreenCV from './GameScreenCV';

const TabNavigator = createBottomTabNavigator({
  Info: GameScreenInfo,
  CVs: GameScreenCV
});

export default TabNavigator
