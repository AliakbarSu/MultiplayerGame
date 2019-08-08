import { UPDATE_LEADER_BOARD, UPDATE_GAME_STATUS } from "../actions/gamestatus";

const initialState = {
    leaderboard: [],
    status: null
}

const GamestatusReducer = (state = initialState, action ) => {
    switch(action.type) {
        case UPDATE_LEADER_BOARD:
            return {
                ...state,
                leaderboard: action.payload
            }
        case UPDATE_GAME_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default: 
            return state;
    }
}

export default GamestatusReducer;