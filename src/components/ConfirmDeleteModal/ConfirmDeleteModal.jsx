import { createPortal } from "react-dom";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ title, onConfirm, onCancel }) {
  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="confirm-modal">
        <h3>Excluir tarefa</h3>
        <p>
          Tem certeza que deseja excluir: <strong>{title}</strong>?
        </p>
        <div className="confirm-actions">
          <button type="button" className="btn-confirm" onClick={onConfirm}>
            Sim, excluir
          </button>
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmDeleteModal;
