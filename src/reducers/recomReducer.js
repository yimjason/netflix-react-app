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

export default function(state = [], action) {
  switch (action.type) {
    case GET_RECOM:
      state = action.data;
      return state;
    case ADD_SHOW_TO_RECOM:
      var item = action.data;
      if(!state.have(item)){ state.unshift(item); }          
      return [...state];
    default:
      return state;
  }
}
