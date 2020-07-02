import React from "react";
import { observable } from "mobx";

const App = () => {
  return (
    <div>
      <div>App</div>
    </div>
  );
};

class Todo {
  @observable text = "";
  @observable espiringDate = null;
}

export default App;
