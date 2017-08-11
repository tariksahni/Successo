'use strict';
import React from 'react';
import ToDoBox from './Components-DashBoard/ToDoBox.jsx';
import DoingBox from './Components-DashBoard/DoingBox.jsx';
import DoneBox from './Components-DashBoard/DoneBox.jsx';
import NewTaskForm from './Components-DashBoard/NewTaskForm.jsx';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import style from './css/styles.css';
import axios from 'axios';

class Successo extends React.Component {
  constructor() {
    super();
    this.onMongoData = this.onMongoData.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  onMongoData(data){
    var formattedData = JSON.parse(data.currentTarget.response);
    const parsedMongoData = JSON.parse(data.currentTarget.response);
    const toDoData = parsedMongoData.filter(function(el, index){
      return parsedMongoData[index].status === "to-do"
    });
    const doingData = parsedMongoData.filter((el, index) => {
      return parsedMongoData[index].status === "doing"
    });
    const doneData = parsedMongoData.filter((el, index) => {
      return parsedMongoData[index].status === "done"
    });
    const sendingObj = {
      toDo: toDoData,
      doing: doingData,
      done: doneData,
    }
    this.props.setItems(sendingObj);
  }

  loadDataFromMongo(){
    axios.get('/tasks', {})
    .then(function (response) {
      console.log(response);
      this.onMongoData();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateHandler() {
    this.loadDataFromMongo();
  }

  componentWillMount() {
    this.loadDataFromMongo();
  };

  render() {
    return (
      <div id="mainDiv">
        <div id="titleDiv"><h1 id="dashboardheading">Successo</h1></div>
        <ToDoBox data={this.props.toDo}  handler={this.updateHandler}/>
        <DoingBox data={this.props.doing}  handler={this.updateHandler}/>
        <DoneBox data={this.props.done} handler={this.updateHandler}/>
        <NewTaskForm handler={this.updateHandler}/>
      </div>
    );
  };
};


const mapStateToProps = (state, ownProps) => {
  var stateData = state.successo_reducer.toJS();
  return {
    toDo: stateData.toDo,
    doing: stateData.doing,
    done: stateData.done,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (data) => {
      console.log("dispatch walla chala",data);
      dispatch({
        type: 'SET_ITEMS',
        data
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Successo);