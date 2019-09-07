import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { SignIn, autoLogin } from '../../../../services/store/actions/auth';
import { connect } from 'react-redux';

class LoginScreen extends Component {

    state = {
        inputs: {
            username: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    }

    componentDidMount = () => {
        this.props.autoLogin()
    }


    textChangeHandler = (value, input) => {
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [input]: {value: value}
                }
            }
        })
    }

    onLoginHandler = () => {
        console.log('loging in')
        const authData = {
            username: this.state.inputs.username.value,
            password: this.state.inputs.password.value
        }
        this.props.login(authData)
    }

    onSignupHandler = () => {

    }

    onFacebookLoginHandler = () => {

    }

    render() {
        
        return (
            <View style={styles.container}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={{uri: 'https://www.goodfreephotos.com/albums/other-photos/backgrounds/background-pattern-of-orange-mosaic.jpg'}}>
                    <ScrollView style={styles.wrapper}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Click & Collect</Text>
                        </View>
                        <View style={styles.inputsWrapper}>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={(event) => this.textChangeHandler(event, 'username')} 
                                    style={styles.textInput} 
                                    placeholder="Email Address"
                                    value={this.state.inputs.username}/>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    onChangeText={(event) => this.textChangeHandler(event, 'password')} 
                                    style={styles.textInput} 
                                    placeholder="Password"
                                    value={this.state.inputs.password}/>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.buttonWrapper}>
                                <View style={styles.buttonComponent}>
                                    <TouchableOpacity onPress={this.onLoginHandler}>
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <View style={[styles.buttonComponent, styles.buttonColorSignup]}>
                                    <TouchableOpacity onPress={this.onSignupHandler}>
                                        <Text style={[styles.buttonText, styles.buttonTextColorSignup]}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <View style={[styles.buttonComponent, styles.buttonColorFacebook]}>
                                    <TouchableOpacity onPress={this.onFacebookLoginHandler}>
                                        <Text style={styles.buttonText}>Facebook</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapActionsToProps = dispatch => {
    return {
        login: (authData) => dispatch(SignIn(authData)),
        autoLogin: () => dispatch(autoLogin())
    }
}



export default connect(mapStateToProps, mapActionsToProps)(LoginScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    wrapper: {
        height: '80%'
    },
    titleWrapper: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
        marginBottom: 20
    },
    titleText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#FFFFFF'
    },
    inputsWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    inputWrapper: {
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#FF7400',
        marginTop: 20
    },
    textInput: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 12,
        paddingLeft: 12,
        color: '#FFFFFF'
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    buttonComponent: {
        padding: 20,
        borderRadius: 50,
        width: '80%',
        backgroundColor: '#FB7200',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonColorFacebook: {
        backgroundColor: '#3B5998'
    },
    buttonColorSignup: {
        backgroundColor: '#FFFFFF'
    },
    buttonTextColorSignup: {
        color: '#FB7200'
    }
  });
  
