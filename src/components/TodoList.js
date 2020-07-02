import React from "react";

const TodoList = (props) => {
  if (props.todos.length === 0) {
    return <p>No todos.</p>;
  }

  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
