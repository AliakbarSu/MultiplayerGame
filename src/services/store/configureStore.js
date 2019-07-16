import { createStore, combineReducers } from 'redux';
import mainReducer from './reducers/root';

const rootReducer = combineReducers({
    root: mainReducer
})

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;