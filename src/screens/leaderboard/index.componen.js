import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import NavButonControll from '../services/navButtonsConroller';
import {connect} from 'react-redux';
import { FetchLeaderBoard } from '../../services/store/actions/gamestatus';

class LeaderboardScreen extends Component {
    state = {
        active: 'item3'
    }
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillMount = () => {
        this.props.fetchLeaderboard()
    }


    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.flatlist}
                    data={this.props.gameStatus.leaderboard}
                    renderItem={(info) => {
                        return (
                            <View style={styles.wrapper}>
                                <View style={[styles.items, this.state.active === info.item.key ? styles.active : null]}>
                                    <View style={styles.avatarWrapper}>
                                        <Image source={info.item.value.avatar} style={styles.avatar}/>
                                    </View>
                                    <View style={styles.detailsWrapper}>
                                        <Text style={styles.nameText}>{info.item.value.name}</Text>
                                        <Text style={styles.pointsText}>{info.item.value.points} points</Text>
                                    </View>
                                    <View style={styles.positionWrapper}>
                                        <Text style={styles.positionText}>{info.item.value.position}</Text>
                                    </View>
                                </View>
                            </View>
                            
                        )
                    }}>

                </FlatList>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        gameStatus: state.gameStatus
    }
}

const mapActionsToProps = dispatch => {
    return {
        fetchLeaderboard: () => dispatch(FetchLeaderBoard())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(LeaderboardScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatlist: {
        width: '100%'
    },
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }, 
    items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '80%',
        marginTop: 10,
        padding: 12,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#00DFDF'
    },
    avatarWrapper: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    detailsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '40%'
    },
    nameText: {
        width: '100%',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "bold"   
    },
    pointsText: {
        width: '100%',
        color: '#FFFFFF'
    },
    positionWrapper: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    positionText: {
        color: '#EBFF09',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'right'
    },
    active: {
        backgroundColor: "#FF821A"
    }
  });


  
