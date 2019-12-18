import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import TaskForm from './TaskForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "taskList": [],
      "task": ""
    }
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">React Todo List</a>
            </div>
          </div>
        </nav>
        <TaskForm />
      </div>
    );
  }
  
}

export default App;
