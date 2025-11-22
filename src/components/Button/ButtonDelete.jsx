function ButtonDelete({ onClick }) {
  return (
    <button
      type="button"
      className="btn btn--delete"
      onClick={onClick}
      aria-label="Excluir tarefa"
    >
      Excluir
    </button>
  );
}

export default ButtonDelete;
