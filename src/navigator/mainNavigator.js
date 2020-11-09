import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps169885Navigator from '../features/Maps169885/navigator';
import UserProfile169881Navigator from '../features/UserProfile169881/navigator';
import UserProfile1169858Navigator from '../features/UserProfile1169858/navigator';
import Feed2169857Navigator from '../features/Feed2169857/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps169885: { screen: Maps169885Navigator },
UserProfile169881: { screen: UserProfile169881Navigator },
UserProfile1169858: { screen: UserProfile1169858Navigator },
Feed2169857: { screen: Feed2169857Navigator },

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
