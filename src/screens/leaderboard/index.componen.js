import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native'
import NavButonControll from '../services/navButtonsConroller'

class LeaderboardScreen extends Component {
    state = {
        active: 'item3',
        leaderboard: [
            {
                key: "item1",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 1
                }
            },
            {
                key: "item2",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 2
                }
            },
            {
                key: "item3",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 3
                }
            },
            {
                key: "item4",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 4
                }
            },
            {
                key: "item5",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 5
                }
            },
            {
                key: "item6",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 5
                }
            },
            {
                key: "item7",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 5
                }
            },
            {
                key: "item8",
                value: {
                    name: "John Doe",
                    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
                    points: 342,
                    position: 5
                }
            }
        ]
    }
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.flatlist}
                    data={this.state.leaderboard}
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

export default LeaderboardScreen;
  
