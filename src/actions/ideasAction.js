import {ADD_IDEA} from './types';


export const ideasAction = (text) => dispatch => {
  console.log(text,'action')
  return dispatch({
    type:ADD_IDEA,
    payload:text
  })
}
