import React from 'react';
import Task from 'components/Task/Task';

export default class Board extends React.Component {
  render() {
    var items = this.props.items;
    return (<ul>{items.map((item, i) =>
        <li key={'task-no' + i}>
          <Task value={item.task}
                onEdit={this.props.onEdit.bind(null, i)} />
        </li>
    )}
    </ul>)
  }
}