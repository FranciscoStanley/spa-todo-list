function ButtonCompleted({ onClick, completed }) {
  return (
    <button
      type="button"
      className="btn btn--complete"
      onClick={onClick}
      aria-pressed={completed}
      aria-label={
        completed ? "Marcar como não concluído" : "Marcar como concluído"
      }
    >
      {completed ? "Concluído" : "Completar"}
    </button>
  );
}

export default ButtonCompleted;
