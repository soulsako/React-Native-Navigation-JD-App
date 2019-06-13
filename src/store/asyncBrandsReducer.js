const initialState = {

  mens: {
    banner: [], 
    data: []
  }, 

  womens: {
    banner: [], 
    data: []
  }, 

  kids: {
    banner: [], 
    data: []
  },

  isFetching: false,

  isError: false

}
const asyncBrandsReducer = (state = initialState, action) => {

  switch(action.type){

    default: 
    return state;
  }

}

export default asyncBrandsReducer;