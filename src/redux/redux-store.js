import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import searchBarReducer from "./searchBarReducer";


let reducers = combineReducers({
    searchBar: searchBarReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;