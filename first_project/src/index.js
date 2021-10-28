import React from "react";
import ReactDOM from "react-dom";

function TodoItem() {
  return <span>Drink coffee</span>;
}

function TodoList() {
  return (
    <ul>
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
    </ul>
  );
}
ReactDOM.render(<TodoList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
