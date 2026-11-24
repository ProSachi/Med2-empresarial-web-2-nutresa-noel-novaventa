export function ModalConfirmacion({ mensaje, onClose }) {
  return (
    <div className="modal-fondo" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(evento) => evento.stopPropagation()}
      >
        <p>{mensaje}</p>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
