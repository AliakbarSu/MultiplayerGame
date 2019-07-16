import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

export default () => {
    return (
        
        <Text>
            <Image style={styles.image} source={{uri: 'https://res.cloudinary.com/dxuf2ssx6/image/upload/v1562756060/portfolio/projects-thumbnail/graphql-api.jpg'}}/>
        </Text>
    )
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
  
