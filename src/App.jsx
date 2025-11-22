import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./pages/AddTodo/AddTodo";
import { todosMock } from "./mocks/todosMock";
import "./styles/app.css";

function App() {
  const [todos, setTodos] = useState(todosMock);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = (newTodo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        ...newTodo,
        completed: false,
      },
    ]);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Router>
        <Header />
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Alternar tema"
          title={darkMode ? "Modo claro" : "Modo escuro"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route path="/add" element={<AddTodo onAdd={handleAddTodo} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
