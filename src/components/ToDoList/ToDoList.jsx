import React from "react";
import ToDoListItem from "../ToDoListItem";
import './ToDoList.scss'

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default ToDoList;