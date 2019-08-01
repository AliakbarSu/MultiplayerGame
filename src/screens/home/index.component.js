import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import NavButonControll from '../services/navButtonsConroller'
import UserNav from '../../components/user-nav/index';
import MapView from 'react-native-maps';
import { OpenPlayModal, OpenWonModal, OpenLostModal, OpenQuizeModal, OpenChallengeRequest } from '../services/modals';

class HomeScreen extends Component {

    state = {
        focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                Dimensions.get('window').width /
                Dimensions.get('window').height * 0.0122
        }
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    componentDidMount = () => {
        setTimeout(() => {
            // OpenPlayModal(this.props)
            // OpenWonModal(this.props)
            // OpenLostModal(this.props)
            // OpenQuizeModal(this.props)
            OpenChallengeRequest(this.props)
        }, 100)
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2, zIndex: 100}}>
                    <UserNav style={{flex: 1, zIndex: 100}}/>
                </View>
                <MapView initialRegion={this.state.focusedLocation} style={styles.map}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    map: {
        width: '100%',
        height: '100%',
        marginTop: -40,
        zIndex: -1
    }
  });

export default HomeScreen;
  
