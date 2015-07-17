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
      tasks: this.state.tasks.concat([{task: 'New Task yo!'}])
    })
  }
  render() {
    var tasks = this.state.tasks;
    return (
      <div>
        <button onClick={() => this._addItem()}>+</button>
        <Board items={tasks}/>
      </div>
    );
  }
}