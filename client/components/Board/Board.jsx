import React from 'react';
import Task from 'components/Task/Task';

export default class Board extends React.Component {
  render() {
    var items = this.props.items;
    items.map((item, i) => {
      console.log(item, i)
    })
    return (<ul>{items.map((item, i) =>
      <li key={'task-no' + i}>
        <Task value={item}
          onEdit={this.props.onEdit.bind(null, i)} />
      </li>
    )}
    </ul>)
  }
}