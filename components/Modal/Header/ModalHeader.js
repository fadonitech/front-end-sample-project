const ModalHeader = ({ secondPage }) => (
  <div>
    <h2 className="open-sans-light text-align-center">
      {secondPage ? "Subscribe to our waiting list" : "Which plan would you be more interested?"}
    </h2>
    <div className="modal__page-marker">
      <div className="modal__page-marker-1 marker-blue"></div>
      <div className={`modal__page-marker-2 ${secondPage ? 'marker-blue' : ''}`}></div>
    </div>
  </div>
)

export default ModalHeader;
