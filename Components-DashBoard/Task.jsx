import React from 'react';
import style from ".././css/styles.css"; //eslint-disable-line
import axios from 'axios';
class Task extends React.Component {
  constructor() {
    super();
    this.doingStatus = this.doingStatus.bind(this);
    this.doneStatus = this.doneStatus.bind(this);
    this.toDoStatus = this.toDoStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  doingStatus () {
    var that = this;
    axios.put(`/tasks/${this.props.uniqueID}`, {
      name : `${this.props.name}`,
      author:`${this.props.author}`,
      description:`${this.props.description}`,
      assigned:`${this.props.assigned}`,
      priority:`${this.props.priority}`,
      status: 'doing'
    })
    .then(response => { //eslint-disable-line

      that.props.handler();
    })
    .catch(error => { //eslint-disable-line

    });

  }
  
  doneStatus () {
    var that = this;
      axios.put(`/tasks/${this.props.uniqueID}`, {
      name : `${this.props.name}`,
      author:`${this.props.author}`,
      description:`${this.props.description}`,
      assigned:`${this.props.assigned}`,
      priority:`${this.props.priority}`,
      status: 'done'
    })
    .then(response => { //eslint-disable-line

      that.props.handler();
    })
    .catch(error => { //eslint-disable-line

    });
  }

  toDoStatus () {
    var that = this;
    axios.put(`/tasks/${this.props.uniqueID}`, {
      name : `${this.props.name}`,
      author:`${this.props.author}`,
      description:`${this.props.description}`,
      assigned:`${this.props.assigned}`,
      priority:`${this.props.priority}`,
      status: 'to-do'
    })
    .then(response => { //eslint-disable-line

      that.props.handler();
    })
    .catch(error => { //eslint-disable-line

    });
  }

  deleteTask () {
    var that = this;
    axios.delete(`/tasks/${this.props.uniqueID}`)
    .then(response => { //eslint-disable-line

      that.props.handler();
    })
    .catch(error => { //eslint-disable-line

    });
  }

  render() {
    return (
      <div className='taskItem'>
        <div className="taskItemName">
          <div className="taskItemNameText">
            {this.props.name} <br />
            <span className="createdByLabel">Created By:</span> <span className="createdByName">{this.props.author}</span>
          </div>
        </div>
        <button onClick={this.deleteTask} className="deleteButton"> X </button>
        <div className="taskItemBody">
          <p><span className="fieldLabels">Assigned To:</span> {this.props.assigned}</p>
          <p><span className="fieldLabels">Priority Level:</span> {this.props.priority}</p>
          <p>{this.props.description}</p>
          <div className="assignButtonContainer">
            <div className="assignButton toDoButton" onClick={this.toDoStatus}>TO DO</div>
            <div className="assignButton doingButton" onClick={this.doingStatus}>DOING</div>
            <div className="assignButton doneButton" onClick={this.doneStatus}>DONE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;