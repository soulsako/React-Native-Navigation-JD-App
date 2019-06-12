import { createStore, combineReducers } from 'redux';
import brandsReducer from './brandsReducer';


const rootReducer = combineReducers({

  brands: brandsReducer
})


const store = createStore(rootReducer);


export default store;



