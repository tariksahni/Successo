'use strict';

import Immutable, {Map} from 'immutable';

let initialState = Map({
  toDo: Immutable.List(),
  doing: Immutable.List(),
  done: Immutable.List(),
});

const successoReducer = (state = initialState, action) => {
  let newState = state;
  switch(action.type){
    
    case 'SET_ITEMS':
      return Immutable.fromJS(action.data);

    default:
      return newState;
  }
};

export default successoReducer;