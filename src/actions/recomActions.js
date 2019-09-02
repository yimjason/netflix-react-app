import { GET_RECOM, ADD_SHOW_TO_RECOM } from './types';

export const getRecom = () => dispatch => {
  fetch('https://my-json-server.typicode.com/yimjason/shows/recommendations')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_RECOM,
        data: data
      })
    );
};

export const addShowToRecom = obj => dispatch => {
  dispatch({
    type: ADD_SHOW_TO_RECOM,
    data: obj
  });
};

