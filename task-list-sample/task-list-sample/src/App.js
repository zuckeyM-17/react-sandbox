import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<TaskList />);
  }
}

class TaskList extends Component {
  render() {
    const tasks = [
      'hoge',
      'fuga',
      'piyo',
    ];
    return (
    <ul>
      { tasks.map(v => <TaskListItem value={ v } />) }
    </ul>);
  }
}

class TaskListItem extends Component {
  render() {
    return (<li>{ this.props.value }</li>)
  }
}

export default App;
