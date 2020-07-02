import React, { useState } from "react";

const TodoInput = (props) => {
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    props.addTodo(text);
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          value={text}
          onChange={handleOnChange}
          placeholder="write new todo..."
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
