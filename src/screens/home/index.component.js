import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavButonControll from '../services/navButtonsConroller'
import UserNav from '../../components/user-nav/index';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    componentDidMount = () => {
        console.log(this.props)
        this.props.navigator.showModal({
            screen: 'click.CheckoutScreen', // unique ID registered with Navigation.registerScreen
            title: 'Modal', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {
                leftButtons: [
                    {
                        title: "sideDrawer",
                        id: 'closeModal'
                    }
                ]
            }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
            overrideBackPress: false // true / false, (Android only), prevents back button and hardware back button from hiding the dialog on Android, instead the [navigator event](https://wix.github.io/react-native-navigation/#/screen-api?id=setonnavigatoreventcallback) 'backPress' will be sent (optional)
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <UserNav style={{flex: 1}}/>
                <View style={{flex: 7}}>
                    <Text>
                        Home
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    image: {
        height: 40,
        width: 40
    }
  });

export default HomeScreen;
  
