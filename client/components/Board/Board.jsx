import React from 'react';
import Task from 'components/Task/Task';

export default class Board extends React.Component {
  render() {
    let items = this.props.items;

    return (<ul>{items.map((item, i) =>
      <li key={'task-no' + i}>
        <Task value={item}
              onEdit={this.props.onEdit.bind(null, i)} />
      </li>
    )}
    </ul>)
  }
}