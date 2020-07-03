import React from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  state = {
    todoInputText: "",
    todoStore: new TodoStore(),
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    this.state.todoStore.addTodo(this.state.todoInputText);
    this.setState({ todoInputText: "" });
  };

  handleOnChange = (e) => {
    this.setState({ todoInputText: e.target.value });
  };

  handleToggleCompleted = (todo) => {
    this.state.todoStore.toggleCompleted(todo);
  };

  render() {
    return (
      <div>
        <h1>Todo Game</h1>

        <form onSubmit={this.handleAddTodo}>
          <input
            value={this.state.todoInputText}
            onChange={this.handleOnChange}
            placeholder="write new todo..."
          ></input>
          <button>Add</button>
        </form>

        <ul>
          {this.state.todoStore.todos.map((todo) => (
            <span key={todo.text} style={{ display: "flex" }}>
              <p style={{ marginRight: "10px" }}>{todo.text}</p>
              <p>Completed: {todo.isCompleted ? "Yes" : "No"}</p>
              <button onClick={() => this.handleToggleCompleted(todo)}>
                Mark As Completed
              </button>
            </span>
          ))}
        </ul>

        <p>
          {this.state.todoStore.allFinished
            ? "All Finished"
            : "Not yet all finished"}
        </p>
      </div>
    );
  }
}

export default App;
