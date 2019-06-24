import { createBottomTabNavigator } from 'react-navigation';
import GameScreenInfo from './GameScreenInfo';
import GameScreenCVs from './GameScreenCVs';

const TabNavigator = createBottomTabNavigator({
    Info: GameScreenInfo,
    CVs: GameScreenCVs
});

export default TabNavigator