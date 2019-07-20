import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import startApp from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    login() {
        startApp()
    }
    render() {
        
        return (
            <View style={styles.container}>

        <Text>
            sjfajf
            <Image style={styles.image} source={{uri: 'https://res.cloudinary.com/dxuf2ssx6/image/upload/v1562756060/portfolio/projects-thumbnail/graphql-api.jpg'}}/>
        </Text>
        <Button title="login" onPress={this.login}/>
        </View>

        )
    }
}

export default AuthScreen

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
  
