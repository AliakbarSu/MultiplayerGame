import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import NavButtonsConroller from '../services/navButtonsConroller'

class CheckoutScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButtonsConroller(event, this.props)
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text>
                        Secure Checkout
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
  
export default CheckoutScreen;
