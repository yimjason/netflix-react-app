import { GET_MYLIST, ADD_SHOW_TO_MYLIST, REMOVE_SHOW_FROM_MYLIST } from '../actions/types';

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
    case GET_MYLIST:
      state = action.data;
      return state;
    case ADD_SHOW_TO_MYLIST:
      var item = action.data;
      if(!state.have(item)){ state.unshift(item); }
      return [...state];
    case REMOVE_SHOW_FROM_MYLIST:            
      item = action.data;
      state = state.filter( (_item) => {
        return _item.id !== item.id;
      } );
      return state;
    default:
      return state;
  }
}
