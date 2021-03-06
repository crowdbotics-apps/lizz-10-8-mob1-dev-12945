import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211964Navigator from '../features/BlankScreen211964/navigator';
import BlankScreen111963Navigator from '../features/BlankScreen111963/navigator';
import BlankScreen011962Navigator from '../features/BlankScreen011962/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211964: { screen: BlankScreen211964Navigator },
BlankScreen111963: { screen: BlankScreen111963Navigator },
BlankScreen011962: { screen: BlankScreen011962Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
