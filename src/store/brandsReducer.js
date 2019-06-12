
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
  }

}
const brandsReducer = (state = initialState, action) => {

  switch(action.type){

    default: 
    return state;
  }

}

export default brandsReducer;