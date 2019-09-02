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

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MYLIST:
      return {
        ...state,
        items: action.payload
      };
    case ADD_SHOW_TO_MYLIST:
      var item = action.payload;
      if(!state.items.have(item)){ state.items.unshift(item); }      
      return {
        ...state,
        item: item
      };
    case REMOVE_SHOW_FROM_MYLIST:      
      let items = state.items;
      item = action.payload;
      items = items.filter( (_item) => {
        return _item.id !== item.id;
      } );  
      state.items = items;
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
