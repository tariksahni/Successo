'use strict';
import React from 'react';
import TaskFormatter from './TaskFormatter.jsx';
import style from '.././css/styles.css';

class DoingBox extends React.Component {
  render() {
    var that = this;
    var taskListNode = this.props.data.map ( function (taskDataItem, index) {
      return (
        <TaskFormatter name={taskDataItem.name}
          author={taskDataItem.author}
          uniqueID={taskDataItem._id}
          description={taskDataItem.description}
          assigned={taskDataItem.assigned}
          priority={taskDataItem.priority}
          status={taskDataItem.status}
          handler={that.props.handler}
        />)
    });
  return (
    <div id="colTwo">
      <div>
        <span className="colHeader">
          Doing Tasks
        </span>
        {taskListNode}
      </div>
    </div>
    );
  }
}

export default DoingBox;
