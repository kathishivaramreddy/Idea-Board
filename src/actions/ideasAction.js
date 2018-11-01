import {ADD_IDEA} from './types';


export const ideasAction= (txt) => dispatch => {

  return dispatch({
    type:ADD_IDEA,
    txt
  })
}
