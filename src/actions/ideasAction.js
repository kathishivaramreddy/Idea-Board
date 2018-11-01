import {ADD_IDEA,VISIBILITY} from './types';

let ideaCount = 0;

export const ideasAction = (text,industry) => dispatch => {
  console.log(text,'action')
  return dispatch({
    type:ADD_IDEA,
    payload:text,
    industry,
    id:ideaCount++
  })
}

export const toggleAction = (id) => dispatch => {

  return dispatch({
    type:VISIBILITY,
    id
  })

}
