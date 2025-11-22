import { useState } from "react";
import { createPortal } from "react-dom";
import "./EditTodoModal.css";

function EditTodoModal({ todo, onClose, onSave }) {
  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);
  const [category, setCategory] = useState(todo.category);

  const handleSave = () => {
    onSave({ ...todo, title, text, category });
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h2>Editar tarefa</h2>
        <label>
          Título
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Texto
          <textarea value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label>
          Categoria
          <input value={category} onChange={e => setCategory(e.target.value)} />
        </label>
        <div className="modal-buttons">
          <button type="button" onClick={handleSave}>Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default EditTodoModal;