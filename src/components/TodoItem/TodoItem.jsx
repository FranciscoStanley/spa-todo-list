import { useState } from "react";
import ButtonCompleted from "../Button/ButtonCompleted";
import ButtonDelete from "../Button/ButtonDelete";
import ButtonEdit from "../Button/ButtonEdit";
import EditTodoModal from "../EditTodoModal/EditTodoModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import "../TodoItem/TodoItem.css";
import "../Button/Buttons.css";

function TodoItem({ todo, setTodos, setIsModalOpen }) {
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    setConfirmDelete(true);
    setIsModalOpen?.(true);
  };

  const performDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    setConfirmDelete(false);
    setIsModalOpen?.(false);
  };

  const cancelDelete = () => {
    setConfirmDelete(false);
    setIsModalOpen?.(false);
  };

  const handleSave = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
    closeModal();
  };

  const openModal = () => {
    setIsEditing(true);
    setIsModalOpen(true); // opcional: pode remover se não usar mais
  };

  const closeModal = () => {
    setIsEditing(false);
    setIsModalOpen(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "is-completed" : ""}`}>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.text}</p>
        <span className="todo-badge">{todo.category}</span>
      </div>
      <div className="actions">
        <ButtonCompleted onClick={toggleComplete} completed={todo.completed} />
        <ButtonEdit onClick={openModal} />
        <ButtonDelete onClick={handleDelete} />
      </div>
      {isEditing && (
        <EditTodoModal todo={todo} onClose={closeModal} onSave={handleSave} />
      )}
      {confirmDelete && (
        <ConfirmDeleteModal
          title={todo.title}
          onConfirm={performDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default TodoItem;
