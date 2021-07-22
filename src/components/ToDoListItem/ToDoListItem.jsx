import React, { Component } from "react";
import './ToDoListItem.scss'


export default class ToDoListItem extends Component {


  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    let classNames = "todo-list-item";

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <div className={classNames} >
        <span className="todo-list-item-label"
         onClick={onToggleDone}>
          {label}
        </span>
        <div className="buttons-box">
          <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
            <i className="bi bi-trash" />
          </button>
          <button type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
            <i className="bi bi-exclamation-lg" />
          </button>
        </div>

      </div>
    )
  }

}



