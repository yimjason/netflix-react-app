import { GET_RECOM, ADD_SHOW_TO_RECOM } from '../actions/types';

Array.prototype.have = function(item){
  let self = this;
  let result = false;
  self.forEach(function(i){    
    if(i.id === item.id){
      result = true;
      return;
    }
  });
  return result;
};

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECOM:
      return {
        ...state,
        items: action.payload
      };
    case ADD_SHOW_TO_RECOM:
      var item = action.payload;
      if(!state.items.have(item)){ state.items.unshift(item); }          
      return {
        ...state,
        item: item
      };
    default:
      return state;
  }
}
