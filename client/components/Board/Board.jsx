import React from 'react';
import Task from 'components/Task/Task';

export default class Board extends React.Component {
  render() {
    var items = this.props.items;
    return (<ul>{items.map((task, i) =>
        <li key={'task' + i}>
          <Task value={task} />
        </li>
    )}
    </ul>)
  }
}