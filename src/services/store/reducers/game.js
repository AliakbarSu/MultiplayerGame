import { ADD_CHALLENGE_REQUEST, ACCEPT_CHALLENGE_REQUEST, SET_CHALLENGE_QUESTIONS, SET_GAME_RESULTS, START_GAME, GIVE_UP_GAME, CLEAR_CHALLENGE_REQUEST } from "../actions/game";

const initialState = {
    currentGame: {
        id: '',
        questions: [],
        status: null, // Playing/Won/Lost,
        results: {
            won: false,
            points: null,
            winner: '',
            wrongAnswers: [], // {id: '', question: '', answer: ''}
            correctAnswers: []
        }
    },
    challengeRequest: {
        points: null,
        level: null,
        opponent: {
            name: '',
            avatar: '',
            win: 0,
            lost: 0,
            level: 0
        },
        time: 0,
        status: null
    }
}

const GameReducer = (state = initialState, action ) => {
    switch(action.type) {
        case ADD_CHALLENGE_REQUEST:
            return {
                ...state,
                challengeRequest: {
                    ...action.payload
                }
            }
        case ACCEPT_CHALLENGE_REQUEST:
            return {
                ...state,
                challengeRequest: {
                    ...state.challengeRequest,
                    status: 'Accepted'
                }
            }
        case CLEAR_CHALLENGE_REQUEST:
            return {
                ...state,
                challengeRequest: {
                    points: null,
                    level: null,
                    opponent: {
                        name: '',
                        avatar: '',
                        win: 0,
                        lost: 0,
                        level: 0
                    },
                    time: 0,
                    status: null
                }
            }
        case START_GAME:
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    id: action.payload.id,
                    questions: action.payload.questions,
                    status: 'Playing'
                }
            }
        case SET_GAME_RESULTS:
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    results: action.payload,
                    status: 'Completed'
                }
            }
        default: 
            return state;
    }
}

export default GameReducer;