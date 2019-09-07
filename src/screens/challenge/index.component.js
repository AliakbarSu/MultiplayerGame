import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import NavButonControll from '../services/navButtonsConroller'
import DefaultInput from '../../components/input/index.component'
import {connect} from 'react-redux';
import { SendChallengeReq } from '../../services/store/actions/game';

class ChallengeScreen extends Component {

    state = {
        inputs: {
            username: {
                value: ''
            },
            points: {
                value: 0
            },
            level: {
                value: 2
            }
        }
    }
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
       NavButonControll(event, this.props)
    }

    onInputHandler = (field, value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [field]: {
                        value: value
                    }
                }
            }
        })
    }

    onChallengeHandler = () => {
        const username = this.state.inputs.username.value;
        const level = this.state.inputs.level.value;
        const points = this.state.inputs.level.value;
        this.props.sendChallengeReq(username, level, points)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow : 1}}>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrapper}>
                            <DefaultInput
                                label="Player's Name" 
                                value={this.state.inputs.username.value} 
                                onChangeText={(value) => this.onInputHandler('username', value)} 
                                placeholder="e.g. ali.sultani"></DefaultInput>
                        </View>
                        <View style={styles.inputWrapper}>
                            <DefaultInput
                                label="Points to Play" 
                                value={this.state.inputs.points.value} 
                                onChangeText={(value) => this.onInputHandler('points', value)} 
                                placeholder="e.g. 20"></DefaultInput>
                        </View>
                        <View style={styles.inputWrapper}>
                            <DefaultInput
                                label="Difficulty Level" 
                                value={this.state.inputs.level.value} 
                                style={styles.inputInputHalf} 
                                onChangeText={(value) => this.onInputHandler('level', value)} 
                                placeholder="e.g. 4"></DefaultInput>
                        </View>
                        <View style={styles.players}>
                            <View style={styles.playersPlayer}>
                                <View style={styles.playersAvatarWrapper}>
                                    <Image style={styles.playersAvatar} source={this.props.profile.avatar}/>
                                </View>
                                <Text style={styles.playersName}>{this.props.profile.firstName + " " + this.props.profile.lastName}</Text>
                            </View>
                            <Text style={styles.vsText}>VS</Text>
                            <View style={styles.playersPlayer}>
                                <View style={styles.playersAvatarWrapper}>
                                    <Image style={styles.playersAvatar} source={{uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560800161/restaurant/backgrounds/louis-hansel-1160001-unsplash.jpg"}}/>
                                </View>
                                <Text style={styles.playersName}>John Doe</Text>
                            </View>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={this.onChallengeHandler}>
                                    <Text style={styles.buttonText}>Challenge</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                     </View>
               </ScrollView>
            </View>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        game: state.game,
        profile: state.profile
    }
}

const mapActionsToProps = dispatch => {
    return {
        sendChallengeReq: (username, level, points) => dispatch(SendChallengeReq(username, level, points))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ChallengeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapper: {
        width: '80%',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    inputInputHalf: {
        width: '50%'
    },
    players: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8',
        marginTop: 20,
        paddingTop: 10
    },
    playersPlayer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    playersAvatarWrapper: {
        borderWidth: 5,
        borderColor: '#FFFFFF',
        width: 100,
        height: 100,
        borderRadius: 50,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    playersAvatar: {
        borderWidth: 10,
        borderColor: '#FF821A',
        width: '100%',
        height: '100%',
        borderRadius: 45.25
    },
    playersName: {
        textAlign: 'center',
        color: '#A8A8A8',
        fontSize: 16,
        padding: 5
    },
    vsText: {
        color: '#00DFDF',
        textAlign: 'center',
        fontSize: 25,
        padding: 5,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        paddingTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        width: '60%',
        borderRadius: 10,
        backgroundColor: '#FF821A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20
    }
});


  
