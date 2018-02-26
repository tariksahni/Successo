export const setItems = data => ({
  type: "SET_ITEMS",
  toDo: null,
  data
});

export function fetchDataFromMongo() {
  return dispatch => {
    fetch("/tasks")
      .then(response => {
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const toDoData = data.filter(function(el, index) {
          return data[index].status === "to-do";
        });
        
        const doingData = data.filter((el, index) => {
          return data[index].status === "doing";
        });
 
        const doneData = data.filter((el, index) => {
          return data[index].status === "done";
        });

        const sendingObj = {
          toDo: toDoData,
          doing: doingData,
          done: doneData
        };

        dispatch(setItems(sendingObj));
      })
      .catch(() => {
        dispatch(setItems());
      });
  };
}
