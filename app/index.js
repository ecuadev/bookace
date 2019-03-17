/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './src/App';

Navigation.registerComponent(`bookace.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "bookace.WelcomeScreen"
      }
    }
  });
});
