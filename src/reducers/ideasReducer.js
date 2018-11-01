import {ADD_IDEA} from '../actions/types'


const initialState = {

  ideas:[]

}

export default function(state=initialState,action) {

  switch(action.type){

    case ADD_IDEA:
      return {
        ...state,
        ideas:[...state.ideas,action.text]
      }
    default:
    return state;
  }

}
