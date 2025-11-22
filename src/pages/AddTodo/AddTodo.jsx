import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTodo.css";

function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState({ title: "", text: "", category: "" });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (
      !newTodo.title.trim() ||
      !newTodo.text.trim() ||
      !newTodo.category.trim()
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    onAdd(newTodo);
    navigate("/"); // Voltar para a página inicial
  };

  return (
    <div className="add-todo-page">
      <h1>Adicionar Novo Todo</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Título"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <textarea
          placeholder="Descrição"
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={newTodo.category}
          onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
        />
        <button onClick={handleAdd}>Adicionar</button>
        <button className="cancel-btn" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
