import React from 'react';
import Board from 'components/Board/Board';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{
        task: "Learn React"
      }, {
        task: "Kill Yourself"
      }, {
        task: "kill others"
      }]
    }
  }
  _addItem() {
    this.setState({
      tasks: this.state.tasks.concat([{task: 'NEW'}])
    })
  }
  _itemEdited(i, task) {
    var tasks = this.state.tasks;

    if(task) {
      tasks[i].task = task;
    } else {
      tasks = tasks.slice(0, i).concat(tasks.slice(i + 1));
    }

    this.setState({ tasks: tasks });
  }
  render() {
    var tasks = this.state.tasks;
    return (
      <div>
        <button onClick={() => this._addItem()}>+</button>
        <Board items={tasks}
               onEdit={(i, task) => this._itemEdited(i, task)}
          />
      </div>
    );
  }
}