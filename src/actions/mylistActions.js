import { GET_MYLIST, ADD_SHOW_TO_MYLIST, REMOVE_SHOW_FROM_MYLIST } from './types';

export const getMyList = () => dispatch => {
  fetch('https://my-json-server.typicode.com/yimjason/shows/mylist')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_MYLIST,
        data: data
      })
    );
};

export const addShowToMyList = obj => dispatch => {
  dispatch({
    type: ADD_SHOW_TO_MYLIST,
    data: obj
  });
};

export const removeShowFromMyList = obj => dispatch => {
  dispatch({
    type: REMOVE_SHOW_FROM_MYLIST,
    data: obj
  });
};
