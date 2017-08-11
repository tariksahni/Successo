export const setItems = (data) => ({
    type: 'SET_ITEMS',
    toDo: null,
    data
  });


export function fetchDataFromMongo() {
  return dispatch => {
    fetch('/tasks')
    .then(response => {
      return response;
    })
    .then(response => response.json())
    .then((data) => {
      
      const toDoData = data.filter(function(el, index){
        return data[index].status === "to-do"
      });
      console.log("tododata",toDoData);
      const doingData = data.filter((el, index) => {
        return data[index].status === "doing"
      });
      console.log("doing",doingData);
      const doneData = data.filter((el, index) => {
        return data[index].status === "done"
      });
      console.log("done",doneData);
      const sendingObj = {
        toDo: toDoData,
        doing: doingData,
        done: doneData,
      }
      console.log("sebd",sendingObj);
      dispatch(setItems(sendingObj));
    })
    .catch(() => {
      dispatch(setItems());
    });
  }    
}
