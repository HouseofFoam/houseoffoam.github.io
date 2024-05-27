import React from "react";

function TodoItem({ todo }) {
  return <p style={styles.todoItem}>{todo.title}</p>;
}

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
  },
};

export default TodoItem;
