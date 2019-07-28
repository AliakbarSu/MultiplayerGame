import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import NavButonControll from '../../../../screens/services/navButtonsConroller'
import Icon from 'react-native-vector-icons/Ionicons'

class QuizeModal extends Component {
    state = {
        quize: {
            questinon: 'Who played Miranda’s boyfriend Robert?',
            answers: [
                {
                    id: 'an1',
                    text: 'Will Smith'
                },
                {
                    id: 'an2',
                    text: 'Jehn Cerbelt'
                },
                {
                    id: 'an3',
                    text: 'Bavid Eiganberg'
                },
                {
                    id: 'an4',
                    text: 'John william'
                }
            ]
        },
        selectedAnswer: {
            id: '',
            text: ''
        }
    }
    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        NavButonControll(event, this.props)
    }

    answerSelectHandler = (answer) => {
        this.setState(prevState => {
            return {
                ...prevState,
                selectedAnswer: answer
            }
        })
    }

    isActive = (answerId) => {
        return answerId.toUpperCase() === this.state.selectedAnswer.id.toUpperCase();
    }

    render() {
        const answers = this.state.quize.answers.map(answer => {
            return (
                <View key={answer.id} style={[styles.answerWrapper, this.isActive(answer.id) ? styles.activeAnswer : null]}>
                    <TouchableOpacity onPress={() => this.answerSelectHandler(answer)}>
                        <Text style={[styles.answerText, this.isActive(answer.id) ? styles.activeAnswer : null]}>{answer.text}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.questionWrapper}>
                        <Text style={styles.questionText}>{this.state.quize.questinon}</Text>
                    </View>
                    <View style={styles.answersWrapper}>
                       {answers}
                    </View>
                    <View style={styles.scoreWrapper}>
                        <View style={styles.scoreItems}>
                            <Text style={styles.scoreText}>Correct: 4</Text>
                        </View>
                        <View style={styles.scoreItems}>
                            <Text style={[styles.scoreText, styles.scoreTextWrong]}>Wrong: 3</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.buttonComponent}>
                            <TouchableOpacity onPress={this.onGiveUpHandler}>
                                <Text style={styles.buttonText}>Give Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.counterWrapper}>
                        <Text style={styles.counterText}>3 of 30</Text>
                    </View>
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
    wrapper: {
        width: '80%'
    },
    questionWrapper: {
        paddingBottom: 40
    },
    questionText: {
        color: '#A8A8A8',
        fontSize: 25,
        fontWeight: 'bold'
    },
    answersWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    answerWrapper: {
        width: '100%',
        padding: 18
    },
    answerText: {
        color: '#A8A8A8',
        fontSize: 17
    },
    activeAnswer: {
        backgroundColor: '#1AFD1A',
        color: '#FFFFFF'
    },
    scoreWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    scoreItems: {
        width: '50%',
        alignItems: 'center'
    },
    scoreText: {
        fontSize: 20,
        color: '#1AFD1A',
        textAlign: 'center'
    },
    scoreTextWrong: {
        color: '#FF0000'
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonComponent: {
        padding: 12,
        borderRadius: 50,
        width: '80%',
        backgroundColor: '#FB7200',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    counterWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    counterText: {
        color: '#00DFDF',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });
  
export default QuizeModal;
