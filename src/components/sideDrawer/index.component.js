import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class sideDrawer extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={[styles.items, styles.itemsHeading]}>
                        <Text style={styles.itemText}>Main</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-contact" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigator.switchToTab({
                                tabIndex: 0 // (optional) if missing, this screen's tab will become selected
                                });}}>
                            <Text style={styles.itemText}>My Profile Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-contact" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Edit Profile Setting</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-contact" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Other Profile Settings</Text>
                    </View>
                    <View style={[styles.items, styles.itemsHeading]}>
                        <Text style={styles.itemText}>Support</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-document" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Terms & Conditions</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-alert" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Report a Problem</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-lock" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Privacy Policy</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-log-out" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Logout</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-log-out" size={30} color="grey"/>
                        </View>
                        <Text style={styles.itemText}>Logout</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      width: Dimensions.get("window").width * 0.8
    },
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#F5FCFF',
      width: Dimensions.get("window").width * 0.8
    },
    items: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-start'
    },
    itemsHeading: {
        backgroundColor: '#eeeeee'
    },
    itemText: {
        color: 'grey'
    },
    itemsIcon: {
        marginRight: 20
    }
  });

export default connect(null, null)(sideDrawer)
  
