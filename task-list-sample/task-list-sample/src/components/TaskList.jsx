import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = props => (<ul>
    { props.tasks.map((v, i) => <TaskListItem key={i} value={ v } />) }
  </ul>);

export default TaskList;