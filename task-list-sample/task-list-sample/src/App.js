import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'hoge',
        'fuga',
        'piyo',
      ],
    };
  }
  render() {
    return (<TaskList tasks={ this.state.tasks }/>);
  }
}

class TaskList extends Component {
  render() {
    return (
    <ul>
      { this.props.tasks.map(v => <TaskListItem value={ v } />) }
    </ul>);
  }
}

class TaskListItem extends Component {
  render() {
    return (<li>{ this.props.value }</li>)
  }
}

export default App;
