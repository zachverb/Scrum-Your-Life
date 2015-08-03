import alt from '../libs/alt';
import TaskActions from 'actions/TaskActions';
import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import findIndex from '../libs/find_index'

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);

    this.tasks = List();

    this.on('bootstrap', () => {
      this.tasks = List(this.tasks)
    });
  }

  create(task) {
    const tasks = this.tasks;
    let id = uuid.v4();
    this.setState({
      tasks: tasks.push({ id, task })
    });
  }

  update(task) {
    const tasks = this.tasks;
    const targetId = findIndex(tasks, 'id', task.id);
    this.setState({
      tasks: tasks.set(targetId, task)
    });
  }

  remove(id) {
    const tasks = this.tasks;
    const index = findIndex(tasks, 'id', id);
    this.setState({
      tasks: tasks.delete(index)
    });
  }
}

export default alt.createStore(TaskStore, 'TaskStore');