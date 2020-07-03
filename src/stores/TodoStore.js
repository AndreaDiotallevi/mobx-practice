import { observable, computed, autorun, toJS } from "mobx";

class TodoStore {
  constructor() {
    autorun(() => {
      console.log(toJS(this.todos));
    });
  }

  @observable todos = [];

  @computed get allFinished() {
    return this.todos.filter((todo) => todo.isCompleted === true).length;
  }

  addTodo(text) {
    const newTodo = new Todo(text);
    this.todos.push(newTodo);
  }

  toggleCompleted(todo) {
    const updatedTodo = this.todos.filter((t) => t.text === todo.text)[0];
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
  }
}

class Todo {
  @observable text;
  @observable isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}

export default TodoStore;
