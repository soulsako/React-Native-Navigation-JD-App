import store from '../store/configureStore';
import axios from 'axios';

export const fetchBrands = () => {

  return {
    type: 'FETCH_BRANDS'
  }

}

export const recievedBrands = data => {
  
  return {
    type: 'RECIEVED_BRANDS', 
    data: data
  }

}

export const recievedError = () => {
  
  return {
    type: 'RECIEVED_ERROR'
  }

}

export const thunk_action_creator = () => {

  store.dispatch(fetchBrands());

  return (dispatch, getState) => {
    return axios.get('https://4amqv0pbp0.execute-api.us-east-1.amazonaws.com/dev/myJdBrands')
    .then(res => {
      if(res.data.message === 'Not Found'){
        throw new Error('No Brands Found');
      }else {
        dispatch(recievedBrands(res.data));
      }
    })
    .catch(error => {
      dispatch(recievedError());
    })
  }
}