import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Platform} from 'react-native';
import NavButonControll from '../services/navButtonsConroller'
import UserNav from '../../components/user-nav/index';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {connect }from 'react-redux';
import { OpenPlayModal, OpenWonModal, OpenLostModal, OpenQuizeModal, OpenChallengeRequest } from '../services/modals';
import {AddChallengeRequest, UpdateLocation} from '../../services/store/actions/game';
import {FetchProfile} from '../../services/store/actions/profile';
import { UpdateGameStatus } from '../../services/store/actions/gamestatus';
import {connect as wbConnect} from '../../services/connection/connection'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class HomeScreen extends Component {
    marker = null;
    watchID = null;

    state = {
        focusedLocation: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: 
                Dimensions.get('window').width /
                Dimensions.get('window').height * LATITUDE_DELTA
        },
        latitude: LATITUDE,
        longitude: LONGITUDE,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0,
            longitudeDelta: 0
        })
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    componentDidMount = () => {

        wbConnect('5d604ed28e826a0996579b36')

        this.watchID = navigator.geolocation.watchPosition(
            position => {
              const { coordinate } =   this.state;
              const { latitude, longitude } = position.coords;
        
              const newCoordinate = {
                latitude,
                longitude
              };

              if (Platform.OS === "android") {
                if (this.marker) {
                this.marker._component.animateMarkerToCoordinate(
                  newCoordinate,
                  500
                 );
                }
              } else {
                coordinate.timing(newCoordinate).start();
              }

              this.setState({
                latitude,
                longitude,
                prevLatLng: newCoordinate
              });

              // Update location
              this.props.updateLocation({lat: latitude, long: longitude})

            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
         );

        // Fetch user Profile
        this.props.FetchProfile()
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    onStatusChangeHandler = (status) => {
        this.props.updateStatus(status)
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
        console.log('Home: ComponentWillUnmount')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2, zIndex: 100}}>
                    <UserNav 
                        style={{flex: 1, zIndex: 100}} 
                        profile={this.props.profile} 
                        gameStatus={this.props.gameStatus}
                        statusChanged={this.onStatusChangeHandler}/>
                </View>
                <MapView 
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()} style={styles.map}>
                    <Marker.Animated
                            ref={marker => this.marker = marker}
                            coordinate={this.state.coordinate}/>
                </MapView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.gameStatus,
        profile: state.profile,
        game: state.game
    }
}


const mapActionsToProps = (dispatch) => {
    return {
        AddChallengeRequest: (challengeData) => dispatch(AddChallengeRequest(challengeData)),
        FetchProfile: () => dispatch(FetchProfile()),
        updateStatus: status => dispatch(UpdateGameStatus(status)),
        updateLocation: (location) => dispatch(UpdateLocation(location))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(HomeScreen);
  

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

