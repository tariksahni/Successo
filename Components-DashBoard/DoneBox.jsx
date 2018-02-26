"use strict";
import React from "react";
import Task from "./Task.jsx";
import style from ".././css/styles.css"; //eslint-disable-line

class DoneBox extends React.Component {
  render() {
    var that = this;
    var taskListNode = this.props.data.map(taskDataItem => {
      return (
        <Task
          key={taskDataItem._id}
          uniqueID={taskDataItem._id}
          name={taskDataItem.name}
          author={taskDataItem.author}
          description={taskDataItem.description}
          assigned={taskDataItem.assigned}
          priority={taskDataItem.priority}
          status={taskDataItem.status}
          handler={that.props.handler}
        />
      );
    });
    return (
      <div id="colThree">
        <div>
          <span className="colHeader">Done Tasks</span>
          {taskListNode}
        </div>
      </div>
    );
  }
}

export default DoneBox;
