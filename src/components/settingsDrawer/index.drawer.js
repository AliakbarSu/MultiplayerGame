import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class sideDrawer extends Component {

    onTabSelectHandler = (link) => {
        this.props.navigator.handleDeepLink({
            link: link
        })
    }


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
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('profileSettings')}}>
                            <Text style={styles.itemText}>My Profile Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-contact" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('editProfile')}}>
                            <Text style={styles.itemText}>Edit Profile Setting</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-contact" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('otherProfileSettings')}}>
                            <Text style={styles.itemText}>Other Profile Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.items, styles.itemsHeading]}>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('support')}}>
                            <Text style={styles.itemText}>Support</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-document" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('terms&Conditions')}}>
                            <Text style={styles.itemText}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-alert" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('reportProblem')}}>
                            <Text style={styles.itemText}>Report a Problem</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-lock" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('privacyPolicy')}}>
                            <Text style={styles.itemText}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsIcon}>
                            <Icon name="md-log-out" size={30} color="grey"/>
                        </View>
                        <TouchableOpacity onPress={() => { this.onTabSelectHandler('logout')}}>
                            <Text style={styles.itemText}>Logout</Text>
                        </TouchableOpacity>
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
  
