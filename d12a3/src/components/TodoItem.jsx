import React from "react";

const TodoItem = ({ id, title, status, toggleTodo, deleteTodo }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{status ? "COMPLETE" : "NOT COMPLETE"}</p>
      <button onClick={toggleTodo}>TOGGLE</button>
      <button onClick={deleteTodo}>DELETE</button>
    </div>
  );
};

export default TodoItem;
