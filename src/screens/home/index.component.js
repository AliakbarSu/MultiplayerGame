import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import NavButonControll from '../services/navButtonsConroller'
import UserNav from '../../components/user-nav/index';
import MapView from 'react-native-maps';
import {connect }from 'react-redux';
import { OpenPlayModal, OpenWonModal, OpenLostModal, OpenQuizeModal, OpenChallengeRequest } from '../services/modals';
import {AddChallengeRequest} from '../../services/store/actions/game';
import {FetchProfile} from '../../services/store/actions/profile';
import { UpdateGameStatus } from '../../services/store/actions/gamestatus';

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
        // setTimeout(() => {
        //     // OpenPlayModal(this.props)
        //     // OpenWonModal(this.props)
        //     // OpenLostModal(this.props)
        //     // OpenQuizeModal(this.props)
        //     this.props.AddChallengeRequest({
        //         points: 33,
        //         level: 2,
        //         opponent: {
        //             name: 'John',
        //             avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931309/restaurant/backgrounds/joseph-gonzalez-176749-unsplash.jpg"},
        //             win: 22,
        //             lost: 12,
        //             level: 5
        //         },
        //         time: 3,
        //         status: 'Pending'
        //     })
        //     OpenChallengeRequest(this.props)
        // }, 5000)

        this.props.FetchProfile()
    }

    onStatusChangeHandler = (status) => {
        this.props.updateStatus(status)
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
                <MapView initialRegion={this.state.focusedLocation} style={styles.map}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.gameStatus,
        profile: state.profile
    }
}


const mapActionsToProps = (dispatch) => {
    return {
        AddChallengeRequest: (challengeData) => dispatch(AddChallengeRequest(challengeData)),
        FetchProfile: () => dispatch(FetchProfile()),
        updateStatus: status => dispatch(UpdateGameStatus(status))
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

