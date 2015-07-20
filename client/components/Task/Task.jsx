import React from 'react';

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edited: false }
  }
  _checkEnter(e) {
    if(e.key === 'Enter') {
      this._finishEdit(e);
    }
  }
  _edit() {
    this.setState({ edited: true });
  }
  _finishEdit(e) {
    this.props.onEdit(e.target.value);

    this.setState({ edited: false });
  }
  render() {
    const {value, onEdit, ...props} = this.props;
    var edited = this.state.edited;

    return (
      <div {...props}>{
        edited
        ? <input type='text'
                 defaultValue={value}
                 onBlur={(e) => this._finishEdit(e)}
                 onKeyPress={(e) => this._checkEnter(e)}
                 />
        : <div onClick={() => this._edit()}>{value}</div>
        }
      </div>
    );
  }
}