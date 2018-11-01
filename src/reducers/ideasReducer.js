import {ADD_IDEA,VISIBILITY} from '../actions/types'


const initialState = {

  ideas:[]

}

export default function(state=initialState,action) {
  console.log(action,'reducer')
  switch(action.type){

    case ADD_IDEA:
      return {
        ...state,
        ideas:[...state.ideas,
          {text:action.payload,
          industry:action.industry,
          visibility:true,
          id:action.id,
          description:action.description
        }]
      }
      case VISIBILITY:
        return {...state,ideas:state.ideas.map(idea => idea.id === action.id ? {...idea,visibility:!idea.visibility} : idea )}

    default:
    return state;
  }

}
