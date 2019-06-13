import { createStore, combineReducers, applyMiddleware } from 'redux';
import asyncBrandsReducer from './asyncBrandsReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({

  brands: asyncBrandsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;




