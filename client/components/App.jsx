import React from 'react';
import Board from 'components/Board/Board';
import TaskActions from 'actions/TaskActions';
import TaskStore from 'stores/TaskStore';
import storage from 'libs/storage';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._storeChanged = this._storeChanged.bind(this);

    this.state = TaskStore.getState();
  }

  componentDidMount() {
    TaskStore.listen(this._storeChanged);
  }

  componentWillUnmount() {
    TaskStore.unlisten(this._storeChanged);
  }

  _storeChanged(state) {
    this.setState(TaskStore.getState());
  }

  render() {
    let tasks = this.state.tasks;
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
