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
import { fetchDataFromMongo, setItems } from './actions/successo_actions';

export class Successo extends React.Component {
  constructor() {
    super();
    // this.onMongoData = this.onMongoData.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

 
  loadDataFromMongo(){

    console.log(this.props)
    this.props.dispatch(fetchDataFromMongo());
   
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
    done: stateData.done
  }
}


export default connect(
  mapStateToProps)
  (Successo);