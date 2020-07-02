import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
// import { observable, computed } from "mobx";
// import { observer } from "mobx-react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo Game with Mobx</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

// class Todo {
//   @observable text = "";
//   @observable espiringDate = null;
//   @observable completed = false;
// }

// class TodoList {
//   @observable todos = [];
//   @computed get allCompleted() {
//     return this.todos.filter((todo) => !todo.completed).length === 0;
//   }
// }

// class TodoListView extends React.Component {
//   render() {
//     const todoStore = new TodoList();

//     return (
//       <div>
//         <div>{todoStore.todos}</div>
//       </div>
//     );
//   }
// }

export default App;
