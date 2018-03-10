import React, { Component } from 'react';
import TaskList from './components/TaskList';
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
      formText: '',
    };
  }

  componentDidUpdate() {
    console.log(this.state.formText);
  }

  render() {
    return (<div>
      <TaskList tasks={ this.state.tasks } />
      <TaskForm
        text={ this.state.formText }
        handleChange={event => {
          event.preventDefault();
          this.setState({
            tasks: this.state.tasks,
            formText: event.target.value,
          });
      }}/>
      <Button handleClick={event => {
        event.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat(this.state.formText),
          formText: '',
        });
      }}/>
    </div>);
  }
}

const TaskForm = props => <input type="text" value={ props.text } onChange={props.handleChange}/>;

const Button = props => <button onClick={props.handleClick} >追加</button>

export default App;
