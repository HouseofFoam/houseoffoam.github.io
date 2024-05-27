import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default Todo;
