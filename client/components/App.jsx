import React from 'react';
import Board from 'components/Board/Board';

export default class App extends React.Component {
  render() {
    var tasks = [{
        task: "Learn React"
      }, {
        task: "Kill Yourself"
      }, {
        task: "kill others"
      }]
    return (
      <div>
        <Board items={tasks}/>
      </div>
    );
  }
}