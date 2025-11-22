function ButtonEdit({ onClick }) {
  return (
    <button
      type="button"
      className="btn btn--edit"
      onClick={onClick}
      aria-label="Editar tarefa"
    >
      Editar
    </button>
  );
}

export default ButtonEdit;
