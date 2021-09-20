import { StartLoading, StopLoading } from "./UI";
import { OpenQuizeModal } from "../../../screens/services/modals";
import {socket} from '../../connection/connection';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const ADD_CHALLENGE_REQUEST = 'ADD_CHALLENGE_REQUEST';
export const CLEAR_CHALLENGE_REQUEST = 'CLEAR_CHALLENGE_REQUEST';
export const ACCEPT_CHALLENGE_REQUEST = 'ACCEPT_CHALLENGE_REQUEST';
export const START_GAME = 'START_GAME';
export const SET_GAME_RESULTS = 'SET_GAME_RESULTS';





export const UpdateLocation = (loc) => {
    return (dispatch, getStore) => {
        
        const location = {
            type: 'Point',
            coordinates: [loc.long, loc.lat]
        }
        socket.emit('locationChanged', {location: location, token: getStore().auth.token}, (res) => {
            console.log(res)
            dispatch({type: UPDATE_LOCATION})
        })
    }
}



export const AddChallengeRequest = (challengeRequestData) => {
    return {
        type: ADD_CHALLENGE_REQUEST,
        payload: challengeRequestData
    }
}

export const RejectChallengeRequest = () => {
    return dispatch => {
        // make api call
        dispatch({
            type: CLEAR_CHALLENGE_REQUEST
        })
    }
}

export const AcceptChallengeRequest = () => {
    return dispatch => {
        // make api call
        dispatch({
            type: ACCEPT_CHALLENGE_REQUEST
        })
        dispatch(StartGame({id: 'fjaksf2jsfj', questions: dummyQuestions}))
    }
}

export const StartGame = questions => {
    return {
        type: START_GAME,
        payload: questions
    }
}

export const SubmitAnswers = answers => {
    return dispatch => {
        // make api call
        dispatch({
            type: SET_GAME_RESULTS,
            payload: {
                won: true,
                points: 230,
                winner: 'Ali Sultani',
                wrongAnswers: [
                    {id: 'jfkafjs;alfjksfj', question: 'What is the capital of US?', answer: 'New York'},
                    {id: 'jfkafjs53535fjksfj', question: 'Who is the tallest person on earth?', answer: 'Robert Marker'}
                ],
                correctAnswers: [
                    {id: 'jfkafjw2444lfjksfj', question: 'How many grams in a kilo?', answer: 1000},
                    {id: 'jfkaf1313alfjksfj', question: 'Who is the current president of the US?', answer: 'Donald Trump'}
                ]
            }}) // results from api
    }
}

export const GiveUp = () => {
    return dispatch => {
        // make api call
        dispatch({type: SET_GAME_RESULTS})
    }
}



export const SendChallenge = () => {
    return dispatch => {
        // make api call
        const num = Math.random();
        if(num > 0.5) {
            dispatch(StartGame({id: 'fjaksf2jsfj', questions: dummyQuestions}))
        }else {
            
        }
    }
}

export const SendChallengeReq = (username, level, points) => {
    return dispatch => {
        // make api call
        dispatch(StartLoading({heading: 'Sending Challenge Request', body: 'Awaiting for the request to be accepted', code: 0}))
        const num = Math.random();
        if(num > 0.5) {
            dispatch(StartGame({id: 'fjaksf2sfj', questions: dummyQuestions}))
            dispatch(StopLoading())
            OpenQuizeModal()
        }else {
            dispatch(StopLoading())
        }
    }
}








const dummyQuestions = [
    {
        id: 'jfkafjs;alfjksfj',
        question: 'What is the capital of US?',
        answers: [
            {
                id: 'r29992',
                answer: 'New York'
            },
            {
                id: 'r29221',
                answer: 'Calfronia'
            },
            {
                id: 'r292a21',
                answer: 'Los Angles'
            },
            {
                id: 'r29afsf2',
                answer: 'Washington DC'
            }
        ]
    },
    {
        id: 'jfkafjs53535fjksfj',
        question: 'Who is the tallest person on earth?',
        answers: [
            {
                id: 'jfsljsf',
                answer: 'Robert Wadlow'
            },
            {
                id: 'jfsljsfaf',
                answer: 'John Doe'
            },
            {
                id: 'jfslaa22',
                answer: 'Robert Marker'
            },
            {
                id: 'jfsafqqljsf',
                answer: 'Micheal Barber'
            }
        ]
    },
    {
        id: 'jfkafjw2444lfjksfj',
        question: 'How many grams in a kilo?',
        answers: [
            {
                id: 'jafs099',
                answer: 1000
            },
            {
                id: 'ja2424fs099',
                answer: 500
            },
            {
                id: 'jafs24249',
                answer: 10000
            },
            {
                id: 'jafaq98s099',
                answer: 100
            }
        ]
    },
    {
        id: 'jfkaf1313alfjksfj',
        question: 'Who is the current president of the US?',
        answers: [
            {
                id: 'jfsafjj0-00',
                answer: 'Barak Obama'
            },
            {
                id: 'jfsafjj042400',
                answer: 'George Washington'
            },
            {
                id: 'jfsaf2342jj0-00',
                answer: 'Donal Trump'
            },
            {
                id: 'jfsafjjfsf0',
                answer: 'John Makenzi'
            }
        ]
    }
]

