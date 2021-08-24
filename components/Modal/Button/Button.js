export const ModalSubmitBtn = ({ onBack, onClick, secondPage }) => (
  <div className={secondPage ? "modal__btn-seconda-page" : "modal__btn-container"}>
    <button className="modal__submit-btn" onClick={onBack} type="button">
      {secondPage ? "BACK" : "EXIT"}
    </button>
    <button className="modal__submit-btn" onClick={onClick} type={secondPage ? "submit" : "button"}>
      {secondPage ? "KEEP ME IN THE LOOP" : "NEXT"}
    </button>
  </div>
)