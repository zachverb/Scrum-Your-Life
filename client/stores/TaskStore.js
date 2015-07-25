import alt from '../libs/alt';
import TaskActions from 'actions/TaskActions';
import Immutable from 'immutable';

class TaskStore {
  constructor() {
    this.bindActions(TaskActions);

    this.tasks = Immutable.List();
  }
  init(data) {
    console.log(data);
    let tasks = Immutable.fromJS(data, (key, value) => {
      return value.toList();
    });
    this.setState({
      tasks: tasks
    });
  }
  create(task) {
    let tasks = this.tasks;
    tasks = tasks.push(task);
    this.setState({
      tasks: tasks
    });
  }
  update({id, task}) {
    let tasks = this.tasks;
    tasks = tasks.set(id, task)
    this.setState({tasks: tasks});
  }
  remove(id) {
    let tasks = this.tasks;
    tasks = tasks.delete(id);
    this.setState({
      tasks: tasks
    });
  }
}

export default alt.createStore(TaskStore);