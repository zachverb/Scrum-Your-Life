import React from 'react';
import Task from 'components/Task/Task';

export default class Board extends React.Component {
  render() {
    let items = this.props.items;

    return (<ul>{items.map((item) =>
      <li key={'task-no' + item.id}>
        <Task value={item}
              onEdit={this.props.onEdit.bind(null, item.id)} />
      </li>
    )}
    </ul>)
  }
}