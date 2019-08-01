import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import NavButonControll from '../services/navButtonsConroller'

class PointsScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
       return NavButonControll(event, this.props);
    }

    onRedeemHandler = () => {
        alert('redeem')
    }

    onPointSendHandler = () => {
        alert('send')
    }

    onBuyPointsHandler = () => {
        alert('buy more')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.pointsWrapper}>
                        <Text style={styles.pointsText}>400</Text>
                        <Text style={styles.labels}>points</Text>
                    </View>
                    <View style={styles.valueWrapper}>
                        <Text style={styles.valueText}>$300</Text>
                        <Text style={styles.labels}>nzd</Text>
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={this.onRedeemHandler}>
                                <Text style={styles.buttonText}>Redeem</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonWrapper, styles.buttonWrapperBlue]}>
                            <TouchableOpacity onPress={this.onPointSendHandler}>
                                <Text style={styles.buttonText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonWrapper, styles.buttonWrapperGreen]}>
                            <TouchableOpacity onPress={this.onBuyPointsHandler}>
                                <Text style={styles.buttonText}>Buy More Points</Text>
                            </TouchableOpacity>
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    wrapper: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pointsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    pointsText: {
        color: '#A8A8A8',
        textAlign: 'center',
        fontSize: 65
    },
    valueWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    valueText: {
        color: '#A8A8A8',
        textAlign: 'center',
        fontSize: 65
    },
    labels: {
        fontSize: 20,
        color: '#A8A8A8',
        textAlign: 'center',
        textTransform: 'uppercase'
    },  
    buttonsWrapper: {
        height: '50%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    buttonWrapper: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF821A'
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    buttonWrapperBlue: {
        backgroundColor: '#00DFDF'
    },
    buttonWrapperGreen: {
        backgroundColor: '#00EF00'
    }
  });
  
export default PointsScreen;
