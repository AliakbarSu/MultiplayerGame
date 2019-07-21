import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

class PlayModal extends Component {
    

    render() {
        return (
            <View style={styles.container}>
    
                <Text>
                    Points
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
  
export default PlayModal;
