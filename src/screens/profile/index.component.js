import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
    
                <Text>
                    Profile
                </Text>
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

export default ProfileScreen;
  
