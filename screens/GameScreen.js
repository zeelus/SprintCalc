import { createBottomTabNavigator } from 'react-navigation';
import GameScreenInfo from './GameScreenInfo';
import GameScreenCVs from './GameScreenCVs';
import GameScreenProjects from './GameScreenProjects';

const TabNavigator = createBottomTabNavigator({
    Info: GameScreenInfo,
    CVs: GameScreenCVs,
    Projects: GameScreenProjects
});

export default TabNavigator