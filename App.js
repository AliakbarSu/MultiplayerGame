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
import HomeScreen from './src/screens/home/index.component';
import StartApp from './src/screens/MainTabs/startMainTabs';
import PlayModal from './src/components/modals/components/play/index.modal';
import WonModal from './src/components/modals/components/won/index.modal';
import LostModal from './src/components/modals/components/lost/index.modal';
import React from 'react';

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
Navigation.registerComponent("click.SideDrawerScreen", (props) => SideDrawer, store, Provider);
Navigation.registerComponent("click.HomeScreen", () => HomeScreen, store, Provider);

// Register Modals
Navigation.registerComponent("click.PlayModal", () => PlayModal, store, Provider);
Navigation.registerComponent("click.WonModal", () => WonModal, store, Provider);
Navigation.registerComponent("click.LostModal", () => LostModal, store, Provider);


StartApp()
// Start an App
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'click.AuthScreen',
//     title: "Login"
//   }
// })