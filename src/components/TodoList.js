import React from "react";
import TodoStore from "../stores/TodoStore";

class TodoList extends React.Component {
  render() {
    const todoStore = new TodoStore();

    return (
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.text}>{todo.text}</li>
        ))}
      </ul>
    );
  }
}

// const TodoList = (props) => {
//   if (props.todos.length === 0) {
//     return <p>No todos.</p>;
//   }

//   return (
//     <ul>
//       {props.todos.map((todo) => (
//         <li key={todo}>{todo}</li>
//       ))}
//     </ul>
//   );
// };

export default TodoList;
