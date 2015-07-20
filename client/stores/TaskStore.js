import alt from '../libs/alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);

    this.tasks = [];
  }
  create(task) {
    const tasks = this.tasks;

    this.setState({
      tasks: tasks.concat({task})
    });
  }
  update({id, task}) {
    const tasks = this.tasks;

    tasks[id].task = task;

    this.setState({tasks});
  }
  remove(id) {
    const tasks = this.tasks;

    this.setState({
      tasks: tasks.slice(0, id).concat(tasks.slice(id + 1))
    });
  }
}

export default alt.createStore(TaskStore);