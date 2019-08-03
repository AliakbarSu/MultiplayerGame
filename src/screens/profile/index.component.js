import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import NavButonControll from '../services/navButtonsConroller'
import ImagePicker from '../../services/imagePicker'

class ProfileScreen extends Component {
    
    state = {
        userDetails: {
            avatar: {
                uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560800161/restaurant/backgrounds/louis-hansel-1160001-unsplash.jpg"
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

    onEditPhotoHandler = () => {
        ImagePicker.showImagePicker({title: "Pick an image"}, (res) => {
            if(res.didCancel) {
                console.log('User cancelled')
            } else if(res.err) {
                console.log('An error occured')
            } else {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        userDetails: {
                            avatar: {uri: res.uri}
                        }
                    }
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.User}>
                    <View style={styles.UserAvatarWrapper}>
                        <Image style={styles.UserAvatar} source={this.state.userDetails.avatar}/>
                    </View>
                    <TouchableOpacity onPress={this.onEditPhotoHandler}>
                        <Text style={styles.UserAvatarEditText}>Edit Photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userDetailsWrapper}>
                    <View style={styles.userDetailsInputs}>
                        <View style={styles.userDetailsInputHeader}>
                            <Text style={styles.userDetailsInputHeaderText}>First Name</Text>
                        </View>
                        <View style={styles.userDetailsInputField}>
                            <Text style={styles.userDetailsInputFieldText}>Ali</Text>
                        </View>
                    </View>
                    <View style={styles.userDetailsInputs}>
                        <View style={styles.userDetailsInputHeader}>
                            <Text style={styles.userDetailsInputHeaderText}>Last Name</Text>
                        </View>
                        <View style={styles.userDetailsInputField}>
                            <Text style={styles.userDetailsInputFieldText}>Sultani</Text>
                        </View>
                    </View>
                    <View style={styles.userDetailsInputs}>
                        <View style={styles.userDetailsInputHeader}>
                            <Text style={styles.userDetailsInputHeaderText}>Last Name</Text>
                        </View>
                        <View style={styles.userDetailsInputField}>
                            <Text style={styles.userDetailsInputFieldText}>Sultani</Text>
                        </View>
                    </View>
                    <View style={styles.userDetailsInputs}>
                        <View style={styles.userDetailsInputHeader}>
                            <Text style={styles.userDetailsInputHeaderText}>Email Address</Text>
                        </View>
                        <View style={styles.userDetailsInputField}>
                            <Text style={styles.userDetailsInputFieldText}>Testing@123.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 25
    }, 
    User: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    UserAvatarWrapper: {
        borderWidth: 5,
        borderColor: '#FF821A',
        width: 120,
        height: 120,
        borderRadius: 60,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    UserAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 55
    },
    UserAvatarEditText: {
        color: '#00DFDF',
        paddingTop: 5
    },
    userDetailsWrapper: {
        width: '80%',
        alignItems: 'center'
    },
    userDetailsInputs: {
        width: '100%',
        marginTop: 10
    },
    userDetailsInputHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8',
        padding: 2
    },
    userDetailsInputHeaderText: {
        fontSize: 19,
        color: '#A8A8A8'
    },
    userDetailsInputField: {
        padding: 5
    },
    userDetailsInputFieldText: {
        color: '#A8A8A8',
        fontSize: 15
    }
  });

export default ProfileScreen;
  
