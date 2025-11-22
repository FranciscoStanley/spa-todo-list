import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({ todos, setTodos, setIsModalOpen }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(todos.length / pageSize);

  const start = (currentPage - 1) * pageSize;
  const visible = todos.slice(start, start + pageSize);

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    setCurrentPage(p);
  };

  return (
    <div className="todo-list">
      {visible.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          setIsModalOpen={setIsModalOpen}
        />
      ))}

      <div className="pagination">
        <button
          type="button"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {Array.from({ length: totalPages }, (_, i) => {
          const p = i + 1;
          return (
            <button
              key={p}
              type="button"
              className={p === currentPage ? "active" : ""}
              onClick={() => goTo(p)}
            >
              {p}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default TodoList;
