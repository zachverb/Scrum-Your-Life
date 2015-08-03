import React from 'react';
import Board from 'components/Board/Board';
import TaskActions from 'actions/TaskActions';
import TaskStore from 'stores/TaskStore';
import storage from 'libs/storage';
import connect from '../decorators/connect';

@connect(TaskStore)
export default class App extends React.Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        <button onClick={() => this._addItem()}>+</button>
        <Board items={tasks}
               onEdit={this._itemEdited.bind(this)}
          />
      </div>
    );
  }

  _addItem() {
    TaskActions.create('New task');
  }

  _itemEdited(id, task) {
    if (task) {
      TaskActions.update({id, task})
    } else {
      TaskActions.remove(id);
    }
  }
}
