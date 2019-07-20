import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/auth/index.component';
import LeaderBoardScreen from './src/screens/leaderboard/index.componen';
import CheckoutScreen from './src/screens/checkout/index.component';
import ProfileScreen from './src/screens/profile/index.component';
import RedeemScreen from './src/screens/redeem/index.component';
import SendPointsScreen from './src/screens/send-points/index.component';
import BuyPointsScreen from './src/screens/buy-points/index.component';
import ChallengeScreen from './src/screens/send-points/index.component';
import PointsScreen from './src/screens/points/index.component';
import {Provider} from 'react-redux';
import configureStore from './src/services/store/configureStore';
import SideDrawer from './src/components/sideDrawer/index.component';

const store = configureStore();

// Register Screens

Navigation.registerComponent("click.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("click.LeaderBoardScreen", () => LeaderBoardScreen, store, Provider);
Navigation.registerComponent("click.CheckoutScreen", () => CheckoutScreen, store, Provider);
Navigation.registerComponent("click.ProfileScreen", () => ProfileScreen, store, Provider);
Navigation.registerComponent("click.PointsScreen", () => PointsScreen, store, Provider);
Navigation.registerComponent("click.RedeemScreen", () => RedeemScreen, store, Provider);
Navigation.registerComponent("click.SendPointsScreen", () => SendPointsScreen, store, Provider);
Navigation.registerComponent("click.BuyPointsScreen", () => BuyPointsScreen, store, Provider);
Navigation.registerComponent("click.ChallengeScreen", () => ChallengeScreen, store, Provider);
Navigation.registerComponent("click.SideDrawerScreen", () => SideDrawer, store, Provider);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'click.AuthScreen',
    title: "Login"
  }
})