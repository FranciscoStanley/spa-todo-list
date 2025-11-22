import { useState } from "react";
import "./TodoItem.css";

function TodoItem({
  todo,
  onComplete,
  onDelete,
  onEdit,
  editingTodo,
  setEditingTodo,
}) {
  const [editTodo, setEditTodo] = useState({ ...todo });

  const handleSave = () => {
    onEdit(todo.id, editTodo);
  };

  return (
    <div className="todo-item">
      {editingTodo === todo.id ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editTodo.title}
            onChange={(e) =>
              setEditTodo({ ...editTodo, title: e.target.value })
            }
            placeholder="Edit title"
          />
          <input
            type="text"
            value={editTodo.text}
            onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
            placeholder="Edit text"
          />
          <input
            type="text"
            value={editTodo.category}
            onChange={(e) =>
              setEditTodo({ ...editTodo, category: e.target.value })
            }
            placeholder="Edit category"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditingTodo(null)}>Cancel</button>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <h3>{todo.title}</h3>
            <p>{todo.text}</p>
            <p>Category: {todo.category}</p>
            <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
          </div>
          <div className="actions">
            <button
              className="complete-btn"
              onClick={() => onComplete(todo.id)}
            >
              Complete
            </button>
            <button
              className="edit-btn"
              onClick={() => setEditingTodo(todo.id)}
            >
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
