import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'

export default () => {
    return (
        <View style={styles.container}>
            <Text>
                Side Drawer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      width: Dimensions.get("window").width * 0.8
    },
    image: {
        height: 40,
        width: 40
    }
  });
  
