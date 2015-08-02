import alt from '../libs/alt';
import TaskActions from 'actions/TaskActions';
import { List } from 'immutable';

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);

    this.tasks = List();

    this.on('bootstrap', () => {
      this.tasks = List(this.tasks)
    });
  }

  create(task) {
    this.setState({
      tasks: this.tasks.push(task)
    });
  }

  update({id, task}) {
    this.setState({
      tasks: this.tasks.set(id, task)
    });
  }

  remove(id) {
    this.setState({
      tasks: this.tasks.delete(id)
    });
  }
}

export default alt.createStore(TaskStore, 'TaskStore');