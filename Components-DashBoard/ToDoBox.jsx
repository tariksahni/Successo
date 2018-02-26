import React from 'react';
import Task from './Task.jsx';
import style from ".././css/styles.css"; //eslint-disable-line

class ToDoBox extends React.Component {
  postTask () {

  }
  render() {
    var that = this;
    var taskListNode = this.props.data.map(taskDataItem => {
      return (
        <Task
        name={taskDataItem.name}
        author={taskDataItem.author} key={taskDataItem._id}
        uniqueID={taskDataItem._id}
        description={taskDataItem.description}
        assigned={taskDataItem.assigned}
        priority={taskDataItem.priority}
        status={taskDataItem.status}
        handler={that.props.handler}
        />
      )
    });
  return (
    <div id="colOne">
      <div><span className="colHeader">To Do Tasks</span>
        { taskListNode }
      </div>
    </div>
    );
  }
}

export default ToDoBox;