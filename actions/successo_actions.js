'use strict';

export const setItems = (data) => {
  console.log("tera kaam bhi hia kuch ",data);
  dispatch({
    type: 'SET_ITEMS',
    toDo: null,
    data
  });
};
