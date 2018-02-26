'use strict';
import React from 'react';
import Task from './Task.jsx';
import style from '.././css/styles.css'; //eslint-disable-line

class DoingBox extends React.Component {
  render() {
    var that = this;
    var taskListNode = this.props.data.map ( taskDataItem => {
      return (
        <Task 
          name={taskDataItem.name}
          key={taskDataItem._id}
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
