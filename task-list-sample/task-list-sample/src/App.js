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
    return (<div>
      <TaskList tasks={ this.state.tasks }/>
      <Button handleClick={event => {
        event.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat('next task')
        });
      }}/>
    </div>);
  }
}

class TaskList extends Component {
  render() {
    return (
    <ul>
      { this.props.tasks.map((v, i) => <TaskListItem key={i} value={ v } />) }
    </ul>);
  }
}

class TaskListItem extends Component {
  render() {
    return (<li>{ this.props.value }</li>)
  }
}

class Button extends Component {
  render() {
    return (
    <button
      onClick={event => this.props.handleClick(event)}
    >追加</button>
  )
  }
}

export default App;
