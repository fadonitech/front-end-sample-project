export const ModalSubmitBtn = ({ onBack, onClick }) => (
  <div className={"modal__btn-container"}>
    <button className="modal__submit-btn" onClick={onBack} type="button">
      {"EXIT"}
    </button>
    <button className="modal__submit-btn" onClick={onClick} type={"submit"}>
      {"SUBMIT"}
    </button>
  </div>
)